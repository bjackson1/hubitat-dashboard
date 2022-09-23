import enums from '../enums'

const atmosphere = store => {
    store.on(enums.atmosphere.updateHumidity, ({ atmosphere: existingAtmosphere }, newHumidity) => { 
        if (existingAtmosphere?.humidity === newHumidity) return null

        return {
            atmosphere: {
                ...existingAtmosphere,
                humidity: newHumidity,
            }
        }
    })

    store.on(enums.atmosphere.updateTemperature, ({ atmosphere: existingAtmosphere }, newTemperature) => { 
        if (existingAtmosphere?.temperature === newTemperature) return null

        return {
            atmosphere: {
                ...existingAtmosphere,
                temperature: newTemperature,
            }
        }
    })
}

export default atmosphere

