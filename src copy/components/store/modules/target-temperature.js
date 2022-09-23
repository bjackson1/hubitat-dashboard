import enums from '../enums'

const targetTemperature = store => {
    store.on(enums.targetTemperature.update, ({ targetTemperature }, newTargetTemperature) => { 
        if (targetTemperature === newTargetTemperature) return null
        return { targetTemperature: newTargetTemperature }
    })
}

export default targetTemperature
