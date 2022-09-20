definition(
    name: "Brett Test",
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
    path("/variable") { action: [ GET: "renderGetVariableResponse", POST: "doSetVariable", OPTIONS: "doOptions" ] }
    path("/room") { action: [ GET: "renderRoomResponse", POST: "doSetRoom", OPTIONS: "doOptions" ] }
    path("/static/index.html") { action: [ GET: "renderDashboard" ] }
    path("/static/dashboard.js") { action: [ GET: "renderDashboardJS" ] }
}

jsSource = "https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/dist/index.js"

def renderDashboardJS() {
    httpGet([
        uri: jsSource
    ]) { response ->
        if (response.status != 200) {
            render contentType: "text/plain; charset=utf-8", data: "Error: Failed to acquire source", status: response.status
        }
        //log.debug(response.data.getText())
        render contentType: "text/plain; charset=utf-8", data: response.data.getText(), status: 200
    }
}

def renderDashboard() {
    data = "<html><head><script defer=\"defer\" src=\"/apps/api/107/static/dashboard.js?access_token=63fd4650-b3b0-4d3b-b1d2-694e158692ec\"></script></head><body><div id=\"root\"></div></body></html>";
    render contentType: "text/html", data: data, status: 200;
}

def renderGetVariableResponse() {
    def vars = getAllGlobalVars()
    variableName = params["variableName"]
    variableContent = vars[variableName]
    variableValue = state[variableName]
    data = "{\"value\":${variableValue}}";
    render params: responseParams, data: data, status: 200;
}

def doSetVariable() {
    variableName = params["variableName"]
    variableValue = params["variableValue"] as Double
    setGlobalVar(variableName, variableValue)
    state[variableName] = variableValue as Double
    render data: {}, status: 200;
}

def doSetRoom() {
    def body = parseJson(request.body)

    if (body.targetTemperature) {
        state.userTargetTemperature = body.targetTemperature
    }
    
    tick()

    render status: 200
}

def doOptions() {
    render data: "", status: 200;
}

def renderRoomResponse() {
    data = "{\"temperature\":${getCurrentRoomTemperature()},\"humidity\":${getCurrentRoomHumidity()},\"targetTemperature\":${getTargetTemperature()},\"demand\":${getCurrentDemandState()}}"
    //data = [temperature:17.25,humidity:66,targetTemperature:21.5]
    
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
    
    isScheduleDemand = false
    
    state.heatingSchedule.each{ scheduleItem -> 
        if (scheduleItem.day == dayOfWeek) {
            if (now.getHours() >= scheduleItem.start.hour && now.getHours() < scheduleItem.end.hour) {
                isScheduleDemand = true
                state.demand.fromScheduleTemperature = scheduleItem.targetTemperature
            }
        }
    }
    
    if (!isScheduleDemand) {
        state.userTargetTemperature = null
    }
    
    log.debug(state.userTargetTemperature)
    
    def targetTemperature = state.demand.fromScheduleTemperature
    if (state.userTargetTemperature > 0) {
        targetTemperature = state.userTargetTemperature
    }
    state.targetTemperature = targetTemperature
    
    def currentTemperature = getCurrentRoomTemperature()

    state.demand.fromSchedule = isScheduleDemand
    state.demand.fromThermostat = currentTemperature < targetTemperature
 
    def currentDemandState = getCurrentDemandState()
    def shouldDemand = state.demand.fromSchedule && state.demand.fromThermostat
    def needsDemandChange = shouldDemand != currentDemandState
    
    log.debug(state.demand)
    log.debug("currentDemandState: ${currentDemandState}")
    log.debug("currentTemperatue: ${currentTemperature}")
    log.debug("shouldDemand: ${shouldDemand}")
    log.debug("needsDemandChange: ${needsDemandChange}")
    
    if (needsDemandChange) {
        log.debug("needs to change")
        if (shouldDemand) {
            log.debug("switching on")
            setHeatDemand(true)
        } else {
            log.debug("switching off")
            setHeatDemand(false)
        }
    }
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
        [day: 0, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
        [day: 1, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
        [day: 2, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
        [day: 3, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
        [day: 4, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
        [day: 5, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
        [day: 6, targetTemperature: 19, start: [hour: 18], end: [hour: 22]],
    ]
    
    log.debug(heatingSchedule)
    state.heatingSchedule = heatingSchedule
    state.demand = [] as Map
    
    cronSchedule = "0,5,10,15,20,25,30,35,40,45,50,55 * * ? * *"
    schedule(cronSchedule, tick)
}

def averageHumid() {
	def total = 0
	def n = humidSensors.size()
	humidSensors.each {total += it.currentHumidity}
	return (total / n).toDouble().round(1)
}

