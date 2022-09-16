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
	page(name: "mainPage")
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
    variableValue = state[variableName] //variableContent["value"]
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

def installed() {
    def vars = getAllGlobalVars()
    log.debug "vars ${vars}"
	//initialize()
}

def updated() {
	unsubscribe()
	initialize()
}

def initialize() {
    def vars = getAllGlobalVars()
    log.debug "vars ${vars}"
    
	def averageDev = getChildDevice("AverageHumid_${app.id}")
	if(!averageDev) averageDev = addChildDevice("hubitat", "Virtual Humidity Sensor", "AverageHumid_${app.id}", null, [label: thisName, name: thisName])
	averageDev.setHumidity(averageHumid())
	subscribe(humidSensors, "humidity", handler)
}

def averageHumid() {
	def total = 0
	def n = humidSensors.size()
	humidSensors.each {total += it.currentHumidity}
	return (total / n).toDouble().round(1)
}

def handler(evt) {
	def averageDev = getChildDevice("AverageHumid_${app.id}")
	def avg = averageHumid()
	averageDev.setHumidity(avg)
	log.info "Average humidity = $avg%"
}
