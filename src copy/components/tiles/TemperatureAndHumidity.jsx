import React from 'react'
import { useStoreon } from 'storeon/react'
import tilesCss from './tiles.module.css'

const TemperatureAndHumidity = () => {
    const { atmosphere } = useStoreon('atmosphere')

    if (!atmosphere) return <>Loading...</>
    
    const { temperature, humidity } = atmosphere

    const warmthColourCss = temperature < 17.5 ? tilesCss.tileCold : temperature > 20 ? tilesCss.tileHot : tilesCss.tileMedium

    return (
        <div className={`${tilesCss.tile} ${warmthColourCss}`}>
            <div className={tilesCss.tileTitle}>Temperature & Humidity</div>
            <div className={`${tilesCss.tileBody}`}>
                <div className={tilesCss.primaryMetricDisplay}>{temperature}<sup>°C</sup></div>
                <div className={tilesCss.secondaryMetricDisplay}>{humidity}%</div>
            </div>
        </div>
    )
}

export default TemperatureAndHumidity
