import React, { useState } from 'react'
import { useStoreon } from 'storeon/react'

import { TileWrapper } from '.'

import tilesCss from './tiles.module.css'

const TargetTemperature = ({ setTargetTemperature }) => {
    const { room } = useStoreon('room')
    const title = 'Target Temperature'
    
    const [requestedTemperature, setRequestedTemperature] = useState(null)
    const [timeoutIds, setTimeoutIds] = useState([])

    if (!room) return <TileWrapper title={title}>Loading...</TileWrapper>

    const { targetTemperature } = room.demand

    const requesting = !requestedTemperature || targetTemperature === requestedTemperature ? null : '...'
    const newTemperature = requestedTemperature || targetTemperature

    const setNewTemperature = newTemperature => {
        setRequestedTemperature(newTemperature)
        setTargetTemperature(newTemperature)

        timeoutIds.forEach(clearTimeout)
        const id = setTimeout(() => setRequestedTemperature(null), 10000)
        setTimeoutIds([id, ...timeoutIds])
    }

    const decrementTemperature = () => setNewTemperature(newTemperature - 0.5)
    const incrementTemperature = () => setNewTemperature(newTemperature + 0.5)

    return <TileWrapper title={title}>
        <div className={tilesCss.primaryMetricDisplay}>{newTemperature}<sup>°C</sup>{requesting}</div>
        <div className={tilesCss.buttons}>
            <button className={tilesCss.button} onClick={decrementTemperature}>-</button>
            <button className={tilesCss.button} onClick={incrementTemperature}>+</button>
        </div>
    </TileWrapper>
}

export default TargetTemperature
