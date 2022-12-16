import React, { useState } from 'react'
import { useStoreon } from 'storeon/react'

import { TileWrapper } from '.'

import tilesCss from './tiles.module.css'

const TargetTemperature = ({ setTargetTemperature, zoneId }) => {
    const { [`zone.${zoneId}`]: zone } = useStoreon(`zone.${zoneId}`)
    const title = 'Target Temperature'
    
    const [requestedTemperature, setRequestedTemperature] = useState(null)
    const [timeoutIds, setTimeoutIds] = useState([])

    if (!zone) return <TileWrapper title={title}>Loading...</TileWrapper>

    const { targetTemperature } = zone.demand

    const requesting = !requestedTemperature || targetTemperature === requestedTemperature ? '' : tilesCss.requesting
    const newTemperature = requestedTemperature || targetTemperature
    const demandStatus = zone?.demand?.status


    const setNewTemperature = newTemperature => {
        setRequestedTemperature(newTemperature)
        setTargetTemperature(zoneId, newTemperature)

        timeoutIds.forEach(clearTimeout)
        const id = setTimeout(() => setRequestedTemperature(null), 10000)
        setTimeoutIds([id, ...timeoutIds])
    }

    const decrementTemperature = () => setNewTemperature(newTemperature - 0.5)
    const incrementTemperature = () => setNewTemperature(newTemperature + 0.5)

    return (
        <>
        {/* <TileWrapper title={title}> */}
            <div className={`${tilesCss.primaryMetricDisplay} ${requesting}`}>{newTemperature.toFixed(1)}</div>
            <div className={tilesCss.buttons}>
                <button className={tilesCss.button} onClick={decrementTemperature}>-</button>
                <button className={tilesCss.button} onClick={incrementTemperature}>+</button>
                {demandStatus && <img className={tilesCss.secondaryIcon} src="https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png" />}
                {!demandStatus && <div className={tilesCss.secondaryMetricDisplay}>Off</div>}
            </div>
        {/* </TileWrapper> */}
        </>
    )
}

export default TargetTemperature
