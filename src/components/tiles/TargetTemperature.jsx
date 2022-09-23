import React from 'react'
import { useStoreon } from 'storeon/react'

import tilesCss from './tiles.module.css'
import css from './TargetTemperature.module.css'

const TargetTemperature = ({ setTargetTemperature }) => {
    const { targetTemperature } = useStoreon('targetTemperature')

    if (!targetTemperature) return <>Loading...</>

    const decrementTemperature = () => {
        setTargetTemperature(targetTemperature - 0.5)
    }

    const incrementTemperature = () => {
        setTargetTemperature(targetTemperature + 0.5)
    }

    return (
        <div className={tilesCss.tile}>
            <div className={tilesCss.tileTitle}>Target Temperature</div>
            <div className={`${tilesCss.tileBody} ${css.main}`}>
                <div className={tilesCss.primaryMetricDisplay}>{targetTemperature}<sup>°C</sup></div>
                <div className={tilesCss.buttons}>
                    <button className={tilesCss.button} onClick={decrementTemperature}>-</button>
                    <button className={tilesCss.button} onClick={incrementTemperature}>+</button>
                </div>
            </div>
        </div>
    )
}

export default TargetTemperature
