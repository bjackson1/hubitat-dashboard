import hubitat from '../lib/hubitat'

const useApp = () => {
    const setTargetTemperature = async (zoneId, targetTemperature) => {
        await hubitat.setTargetTemperature(zoneId, targetTemperature)
    }

    return { setTargetTemperature }
}

export default useApp
