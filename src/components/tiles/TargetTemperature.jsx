import React, { useState } from 'react'
import { useStoreon } from 'storeon/react'

import tilesCss from './tiles.module.css'
import css from './TargetTemperature.module.css'

const TargetTemperature = ({ setTargetTemperature }) => {
    const { targetTemperature } = useStoreon('targetTemperature')
    const [requestedTemperature, setRequestedTemperature] = useState(12)

    if (!targetTemperature) return <>Loading...</>

    const setNewTemperature = newTemperature => {
        setRequestedTemperature(newTemperature)
        setTargetTemperature(newTemperature)
    }

    const decrementTemperature = () => setNewTemperature(requestedTemperature - 0.5)
    const incrementTemperature = () => setNewTemperature(requestedTemperature + 0.5)

    return (
        <div className={tilesCss.tile}>
            <div className={tilesCss.tileTitle}>Target Temperature</div>
            <div className={`${tilesCss.tileBody} ${css.main}`}>
                <div className={tilesCss.primaryMetricDisplay}>{requestedTemperature}<sup>°C</sup></div>
                <div className={tilesCss.buttons}>
                    <button className={tilesCss.button} onClick={decrementTemperature}>-</button>
                    <button className={tilesCss.button} onClick={incrementTemperature}>+</button>
                </div>
            </div>
        </div>
    )
}

export default TargetTemperature
