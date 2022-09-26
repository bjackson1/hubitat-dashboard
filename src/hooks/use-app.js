import hubitat from '../lib/hubitat'

const useApp = () => {
    const setTargetTemperature = async targetTemperature => {
        await hubitat.setTargetTemperature(targetTemperature)
    }

    return { setTargetTemperature }
}

export default useApp
