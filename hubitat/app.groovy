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


heatingSchedule = [day = 0, start = [hour = 18, minute = 0], end = [hour = 20, minute = 0], targetTemperature = 19]

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

//    return dynamicPage(
//        name: "selectDevices",
//        title: "Select your Devices",
//        install: true,
//        uninstall: true
//    ) {
//        
//    }


//	def errorMsg = ""
//	if (devices == [:]) {
//		errorMsg = "There were no devices from YALE"
//	}
//	def newDevices = [:]
//    if (logEnable) log.debug "select devices, ${devices}"
//	devices.each {
//    	//log.debug "select devices each ${it.value.deviceId} - ${it.value.alias} - model ${it.value.deviceModel}"
//		def isChild = getChildDevice(it.value.deviceId) // deviceId changed to dni so dont add twice
//		if (!isChild) {
//        	//log.debug "select devices, each !ischild ${it.value.alias} - ${it.value.deviceid}" //value.
//			newDevices["${it.value.deviceId}"] = "${it.value.alias} \n model ${it.value.deviceModel}"
//            //log.debug "select devices, each !ischild $newDevices"
//		}
//	}
//	if (newDevices == [:]) {
//		errorMsg = "No new devices to add."
//		}
//	settings.selectedDevices = null
//	def DevicesMsg = "Token is ${state.Token}\n\r" +
//		"TAP below to see the list of devices available select the ones you want to connect to " +
//		"SmartThings.\n\r\n\rPress DONE when you have selected the devices you " +
//		"wish to add, thenpress DONE again to install the devices.  Press	<	" +
//		"to return to the previous page."
//	return dynamicPage(
//		name: "selectDevices", 
//		title: "Select Your Devices", 
//		install: true,
//		uninstall: true) {
//		section(errorMsg){} //new {}
//		section(DevicesMsg) {
//			input "selectedDevices", "enum",
//			required:false, 
//			multiple:true, 
//			title: "Select Devices (${newDevices.size() ?: 0} found)",
//			options: newDevices
//		}
//	}
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

def doOptions() {
    render data: "", status: 200;
}

def tick(data) {
    now = new Date()
    dayOfWeek = now[Calendar.DAY_OF_WEEK]
    
    state.heatingSchedule.each{ scheduleItem -> 
        if (scheduleItem.day == dayOfWeek) {
            if (now.getHours() >= scheduleItem.start.hour && now.getHours() < scheduleItem.end.hour) {
                state.demand.fromSchedule = true
                state.demand.fromScheduleTemperature = scheduleItem.targetTemperature
            } else {
                state.demand.fromSchedule = false
            }
        }
    }
    
    def demandState = settings.switch.currentValue("switch") == "on"
    
    def currentTemperature = settings.temperatureSensor.currentValue("temperature")
    
    def shouldDemand = state.demand.fromSchedule && state.demand.fromThermostat
    
    def needsDemandChange = shouldDemand == demandState
        
    if (state.demand.scheduleTemperature < currentTemperature) {
        state.demand.fromThermostat = false
    }
    
    log.debug(state.demand)
    log.debug("demandState: ${demandState}")
    log.debug("currentTemperatue: ${currentTemperature}")
    log.debug("shouldDemand: ${shouldDemand}")
    

    if (needsDemandChange) {
        if (shouldDemand) {
            settings.switch.on()
        } else {
            settings.switch.off()
        }
    }


    
//    def sw = getChildDevice(settings.switch.deviceNetworkId)
//    log.debug("settings.switch: ${settings.switch.deviceNetworkId}")
//    log.debug("settings.switch: ${settings.switch.currentValue("switch")}")
//    log.debug("sw: ${sw}")
//    log.debug(sw.type)
//    addChildDevice("hubitat", "sys", "AB53")
//    log.debug(getAllChildDevices())
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
    // addChildApp(String namespace, String name, String label, Map properties = null)
    unschedule()
    def heatingSchedule =  [
        [day: 0, targetTemperature: 19, start: [hour: 18], end: [hour: 20]],
        [day: 3, targetTemperature: 19, start: [hour: 11], end: [hour: 23]],
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

