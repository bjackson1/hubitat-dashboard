import React from 'react'
import { useStoreon } from 'storeon/react'
import tilesCss from './tiles.module.css'
import TileWrapper from './TileWrapper'

const toSentenceCase = str => `${str.substring(0, 1).toUpperCase()}${str.slice(1)}`

const TemperatureAndHumidity = ({ location = 'room' }) => {
    const { room } = useStoreon('room')
    const title = toSentenceCase(location)

    if (!room) return <TileWrapper title={title}>Loading...</TileWrapper>

    const { temperature, humidity } = room?.monitors?.[location] || {}

    const warmthColourCss = temperature < 17.5 ? tilesCss.tileCold : temperature > 20 ? tilesCss.tileHot : tilesCss.tileMedium

    return (
        <TileWrapper title={title} cssStyles={[warmthColourCss]}>
            <div className={tilesCss.primaryMetricDisplay}>{Math.round(temperature*2)/2}<sup>°C</sup></div>
            <div className={tilesCss.secondaryMetricDisplay}>{humidity}%</div>
        </TileWrapper>
    )
}

export default TemperatureAndHumidity
