import React from 'react'
import { useStoreon } from 'storeon/react'
import tilesCss from './tiles.module.css'
import TileWrapper from './TileWrapper'

const toSentenceCase = str => `${str.substring(0, 1).toUpperCase()}${str.slice(1)}`

const TemperatureAndHumidity = ({ location = 'room', zoneId }) => {
    const { [`zone.${zoneId}`]: zone } = useStoreon(`zone.${zoneId}`)
    const title = toSentenceCase(location)

    if (!zone) return <TileWrapper title={title}>Loading...</TileWrapper>

    const { temperature, humidity } = zone?.monitors?.[location] || {}

    const warmthColourCss = temperature < 17.5 ? tilesCss.tileCold : temperature > 20 ? tilesCss.tileHot : tilesCss.tileMedium

    return (
        <>
         {/* <TileWrapper title={title} cssStyles={[warmthColourCss]}> */}
            <div className={tilesCss.primaryMetricDisplay}><img className={tilesCss.secondaryIcon} src="https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/thermometer.png" />{temperature.toFixed(1)}</div>
            <div className={tilesCss.secondaryMetricDisplay}>{humidity}%</div>
         {/* </TileWrapper> */}
        </>
    )
}

export default TemperatureAndHumidity
