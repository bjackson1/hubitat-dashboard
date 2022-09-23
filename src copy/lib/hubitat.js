import config from '../config'

const urlBuilder = () => `${config.url}/${config.apiId}/room?access_token=${config.accessToken}`

const getRoom = async () => {
    const response = await fetch(urlBuilder())
    const body = await response.json()
    return body
}

const setTargetTemperature = async targetTemperature => {
    const response = await fetch(urlBuilder(), { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ targetTemperature }), 
    })
    return response.status === 200
}

export default { 
    getRoom,
    setTargetTemperature,
}
