definition(
    name: "Central Heating Controller",
    namespace: "brett",
    author: "Brett Jackson",
    description: "test",
    category: "Convenience",
    iconUrl: "",
    iconX2Url: "",
    iconX3Url: "",
	singleInstance: true
)

preferences {
    page(name: "selectDevices", title: "Select Devices", nextPage:"mainPage", content:"selectDevices", uninstall: true, install: true)
	//page(name: "mainPage")
}

def selectDevices() {
    log.debug("selectDevices")
    
    return dynamicPage(name: "mainPage", title: "Setup Room", install: true, uninstall: true) {
		section {
			input "thisName", "text", title: "Name this Contact-Motion", submitOnChange: false
			if(thisName) app.updateLabel("$thisName")

            input "temperatureSensor", "capability.temperatureMeasurement", title: "Select Temperature Sensor", submitOnChange: false, required: true, multiple: false
			input "switch", "capability.switch", title: "Select Switch", submitOnChange: false, required: true, multiple: false
			input "dashboard", "capability.variable", title: "Select Dashboard", submitOnChange: false, required: true, multiple: false
		}
	}
}

def handler(evt) {
	def motionDev = getChildDevice("ContactMotion_${app.id}")
	if(evt.value == "open") motionDev.active() else motionDev.inactive()
	log.info "Contact $evt.device $evt.value"
}

def mainPage() {
    if(!state.accessToken){	
        //enable OAuth in the app settings or this call will fail
        createAccessToken()	
    }
    
    def uri = getFullLocalApiServerUrl() + "/?access_token=${state.accessToken}"
    
    def vars = getAllGlobalVars()
    log.debug "vars ${vars}"

    return dynamicPage(name: "setupScreen", uninstall: true, install: true){
        section(){ 
            paragraph("Use the following URI to access the page: <a href='${uri}'>${uri}</a>")
        }
    }
}

mappings {
    path("/room") { action: [ GET: "renderRoomResponse", POST: "doSetRoom", OPTIONS: "doOptions" ] }
    path("/static/index.html") { action: [ GET: "renderDashboard" ] }
    path("/static/dashboard.js") { action: [ GET: "renderDashboardJS" ] }
    path("/requestStatusUpdates") { action: [ GET: "renderStatusUpdates" ] }
}

jsSource = "https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/dist/index.js"

def renderDashboardJS() {
    httpGet([
        uri: jsSource
    ]) { response ->
        if (response.status != 200) {
            render contentType: "text/plain; charset=utf-8", data: "Error: Failed to acquire source", status: response.status
        }

        render contentType: "text/plain; charset=utf-8", data: response.data.getText(), status: 200
    }
}

def renderDashboard() {
    data = "<html><head><script defer=\"defer\" src=\"${getFullLocalApiServerUrl()}/static/dashboard.js?access_token=${state.accessToken}\"></script></head><body><div id=\"root\"></div></body></html>";
    render contentType: "text/html", data: data, status: 200;
}

def doSetRoom() {
    def body = parseJson(request.body)

    if (body.targetTemperature) {
        state.userTargetTemperature = new Float("${body.targetTemperature}f")
        log.debug("new user temperature: ${body.targetTemperature} -> ${state.userTargetTemperature}")
    }
    
    tick()

    render status: 200
}

def doOptions() {
    render data: "", status: 200;
}

def renderRoomResponse() {
    data = "{\"temperature\":${getCurrentRoomTemperature()},\"humidity\":${getCurrentRoomHumidity()},\"targetTemperature\":${getTargetTemperature()},\"demand\":${getCurrentDemandState()}}"
    
    render data: data, contentType: "application/json", status: 200
}

def getCurrentRoomHumidity() {
    return settings.temperatureSensor.currentValue("humidity")
}

def getCurrentRoomTemperature() {
    return settings.temperatureSensor.currentValue("temperature")
}

def getTargetTemperature() {
    return state.targetTemperature
}

def getCurrentDemandState() {
    return settings.switch.currentValue("switch") == "on"
}

def updateItemStatus(name, value, force = false) {
    def needsSend = force
    
    if ((value != null && state.attributes[name] != value) || force == true) {
        state.attributes[name] = value
        needsSend = true
    }
    
    sendEvent(name: name, value: state.attributes[name], type: "heating-control")
}

def renderStatusUpdates() {
    updateItemStatus("demandStatus", null, true)
    updateItemStatus("targetTemperature", null, true)
    updateItemStatus("humidity", null, true)
    updateItemStatus("temperature", null, true)
    
    render data: "{}", contentType: "application/json", status: 200
}



def setHeatDemand(demand) {
    if (demand) {
        settings.switch.on()
    } else {
        settings.switch.off()
    }
}


def tick(data) {
    now = new Date()
    dayOfWeek = now[Calendar.DAY_OF_WEEK]
    
    scheduledTemperature = state.baselineTemperature
    scheduleEnd = 0
    isScheduleActive = false
    demandSource = "schedule"
    
    state.heatingSchedule.each{ scheduleItem -> 
        if (scheduleItem.day == dayOfWeek) {
            if (now.getHours() >= scheduleItem.start.hour && now.getHours() < scheduleItem.end.hour) {
                scheduledTemperature = scheduleItem.targetTemperature
                scheduleEnd = scheduleItem.end.hour
                isScheduleActive = true
            }
        }
    }
    
    if (isScheduleActive) {
        // A schedule is active

        // Manage transition to Inactive
        if (state.demand.scheduled.isActive == false) {
            // if user set temp then cancel and revert to baseline
            state.userTargetTemperature = scheduledTemperature
        }

        state.demand.scheduled = [ isActive: true ]
    } else {
        // There is no heating scheduled at the moment

        // Manage transition to Inactive
        if (state.demand.scheduled.isActive == true) {
            // if user set temp then cancel and revert to baseline
            state.userTargetTemperature = state.baselineTemperature
        }

        state.demand.scheduled = [ isActive: false ]
    }
    
    
    
    log.debug("scheduledTemperature: ${scheduledTemperature}")
    log.debug("state.userTargetTemperature: ${state.userTargetTemperature}")
            
    state.targetTemperature = state.userTargetTemperature
    def currentTemperature = getCurrentRoomTemperature()
    def targetTemperatureWithOverrun = state.targetTemperature * 1.01 // add 1%
    log.debug("targetTemperatureWithOverrun: ${targetTemperatureWithOverrun}")
    
    def demandNeeded = false
    if (targetTemperatureWithOverrun > currentTemperature) {
        demandNeeded = true
    }
    
    def currentDemandState = getCurrentDemandState()
    log.debug("demand switch is on: ${currentDemandState}, demand needed: ${demandNeeded}")

    if (currentDemandState == true && demandNeeded == false) {
        log.debug("setting heat demand to off")
        settings.switch.off()
    }
    
    if (currentDemandState == false && demandNeeded == true) {
        log.debug("setting heat demand to on")
        settings.switch.on()
    }

    updateItemStatus("demandStatus", currentDemandState)
    updateItemStatus("targetTemperature", "{\"temperature\":${targetTemperature},\"source\":\"schedule\"}")
    updateItemStatus("humidity", getCurrentRoomHumidity())
    updateItemStatus("temperature", getCurrentRoomTemperature())
}

def installed() {
    def vars = getAllGlobalVars()
    log.debug "vars ${vars}"
	initialize()
}

def updated() {
	unsubscribe()
	initialize()
}

def initialize() {
    unschedule()
    def heatingSchedule =  [
        [day: 0, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
        [day: 1, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
        [day: 2, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
        [day: 3, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
        [day: 4, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
        [day: 5, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
        [day: 6, targetTemperature: 18f, start: [hour: 18], end: [hour: 21]],
    ]
    
    log.debug(heatingSchedule)
    
    state.baselineTemperature = 12f
    state.demandTemperature = state.baselineTemperature
    state.heatingSchedule = heatingSchedule
    state.demand = [ scheduled: [ isActive: false ] as Map] as Map
    state.attributes = [:]

    
    cronSchedule = "0,5,10,15,20,25,30,35,40,45,50,55 * * ? * *"
    schedule(cronSchedule, tick)
}

def averageHumid() {
	def total = 0
	def n = humidSensors.size()
	humidSensors.each {total += it.currentHumidity}
	return (total / n).toDouble().round(1)
}

