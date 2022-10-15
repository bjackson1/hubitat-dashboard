definition(
    name: "Central Heating Controller - DEV",
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
	page(name: "mainPage", title: "Token", content: "mainPage")
}

def selectDevices() {
    log.debug("selectDevices")
    
    def uri = getFullLocalApiServerUrl() + "/static/index.html?access_token=${state.accessToken}"
    
    return dynamicPage(name: "mainPage", title: "Setup Room", install: true, uninstall: true) {
		section {
			input "thisName", "text", title: "Name this Contact-Motion", submitOnChange: false
			if(thisName) app.updateLabel("$thisName")

            input "temperatureSensorRoom", "capability.temperatureMeasurement", title: "Select Room Temperature Sensor", submitOnChange: false, required: true, multiple: false
            input "temperatureSensorOutside", "capability.temperatureMeasurement", title: "Select Outside Temperature Sensor", submitOnChange: false, required: false, multiple: false
			input "switch", "capability.switch", title: "Select Switch", submitOnChange: false, required: true, multiple: false
			input "dashboard", "capability.variable", title: "Select Dashboard", submitOnChange: false, required: true, multiple: false
		}
        section(){ 
            paragraph("Use the following URI to access the page: <a href='${uri}'>${uri}</a>")
        }
	}
}

def handler(evt) {
	def motionDev = getChildDevice("ContactMotion_${app.id}")
	if(evt.value == "open") motionDev.active() else motionDev.inactive()
	log.info "Contact $evt.device $evt.value"
}

def mainPage() {
    def uri = getFullLocalApiServerUrl() + "/?access_token=${state.accessToken}"
    
    def vars = getAllGlobalVars()
    log.debug "vars ${vars}"

    return dynamicPage(name: "setupScreen", uninstall: true, install: true){

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
        state.demand.temperature = new Float("${body.targetTemperature}f")
        log.debug("new user temperature: ${body.targetTemperature} -> ${state.demand.temperature}")
    }
    
    state.demandSource = "user"

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
    return settings.temperatureSensorRoom.currentValue("humidity")
}

def getCurrentRoomTemperature() {
    return settings.temperatureSensorRoom.currentValue("temperature")
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

def sendStatus() {
    def status = "{\"demand\":{\"status\":${getCurrentDemandState()},\"targetTemperature\":${state.demand.temperature}},\"monitors\":{\"room\":{\"temperature\":${settings.temperatureSensorRoom.currentValue("temperature")},\"humidity\":${settings.temperatureSensorRoom.currentValue("humidity")}},\"outside\":{\"temperature\":${settings.temperatureSensorOutside.currentValue("temperature")},\"humidity\":${settings.temperatureSensorOutside.currentValue("humidity")}}}}"
    sendEvent(name: "status", value: status, type: "heating-control")
}

def tick(data) {
    now = new Date()
    dayOfWeek = now[Calendar.DAY_OF_WEEK]
    
    isScheduleActive = false
   
    state.heatingSchedule.each{ scheduleItem ->
        if (scheduleItem.day == dayOfWeek) {
            if (state.isScheduleActive) {
                if (now.getHours() < scheduleItem.start.hour || now.getHours() > scheduleItem.end.hour) {
                    state.demand.temperature = state.baselineTemperature
                    state.isScheduleActive = false
                }
            } else {
                if (now.getHours() >= scheduleItem.start.hour && now.getHours() < scheduleItem.end.hour) {
                    state.demand.temperature = scheduleItem.targetTemperature
                    state.isScheduleActive = true
                }
            }
        }
    }

    log.debug("hour: ${now.getHours()}, day: ${dayOfWeek}, isScheduleActive: ${state.isScheduleActive}")
    log.debug("state: ${state}")
 
    def currentTemperature = getCurrentRoomTemperature()
    
    def demandNeeded = false
    if (state.demand.temperature > currentTemperature) {
        demandNeeded = true
    }
    
    def currentDemandState = getCurrentDemandState()

    if (currentDemandState == true && demandNeeded == false) {
        log.debug("setting heat demand to off")
        settings.switch.off()
    }
    
    if (currentDemandState == false && demandNeeded == true) {
        log.debug("setting heat demand to on")
        settings.switch.on()
    }

//    updateItemStatus("demandStatus", currentDemandState)
//    updateItemStatus("targetTemperature", "{\"temperature\":${targetTemperature},\"source\":\"${state.demandSource}\"}")
//    updateItemStatus("humidity", getCurrentRoomHumidity())
//    updateItemStatus("temperature", getCurrentRoomTemperature())
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
        //[day: 0, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 1, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 2, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 3, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 4, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 5, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 6, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
        [day: 7, targetTemperature: 17, start: [hour: 19], end: [hour: 22]],
    ]
    
    log.debug(heatingSchedule)
    
    state.demand = [ scheduled: [ isActive: false ] as Map] as Map
    state.baselineTemperature = 12f
    state.demand.temperature = state.baselineTemperature
    state.heatingSchedule = heatingSchedule
    state.attributes = [:]
    state.isScheduleActive = false

    schedule("0,15,30,45 * * ? * *", tick)
    schedule("0,5,10,15,20,25,30,35,40,45,50,55 * * ? * *", sendStatus)
	
	if (state.accessToken == null)
		createAccessToken()
}

def averageHumid() {
	def total = 0
	def n = humidSensors.size()
	humidSensors.each {total += it.currentHumidity}
	return (total / n).toDouble().round(1)
}

