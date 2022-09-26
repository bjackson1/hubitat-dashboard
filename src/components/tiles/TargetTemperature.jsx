import React, { useEffect, useState } from 'react'
import { useStoreon } from 'storeon/react'

import { TileWrapper } from '.'

import tilesCss from './tiles.module.css'
import css from './TargetTemperature.module.css'

const TargetTemperature = ({ setTargetTemperature }) => {
    const { targetTemperature } = useStoreon('targetTemperature')
    
    const [requestedTemperature, setRequestedTemperature] = useState(null)
    // useEffect(() => setRequestedTemperature(targetTemperature?.temperature), [targetTemperature?.temperature])

    if (!targetTemperature) return <TileWrapper>Loading...</TileWrapper>

    const { temperature, source } = targetTemperature

    const requesting = !requestedTemperature || temperature === requestedTemperature ? null : '...'

    const setNewTemperature = newTemperature => {
        setRequestedTemperature(newTemperature)
        setTargetTemperature(newTemperature)
    }

    const decrementTemperature = () => setNewTemperature(temperature - 0.5)
    const incrementTemperature = () => setNewTemperature(temperature + 0.5)

    return <TileWrapper>
        <div className={tilesCss.primaryMetricDisplay}>{temperature}<sup>°C</sup>{requesting}</div>
        <div className={tilesCss.buttons}>
            <button className={tilesCss.button} onClick={decrementTemperature}>-</button>
            <button className={tilesCss.button} onClick={incrementTemperature}>+</button>
        </div>
        <div className={css.source}>Set by {source} until 00:00</div>
    </TileWrapper>
}

export default TargetTemperature
