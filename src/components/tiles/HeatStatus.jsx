import React from 'react'
import { useStoreon } from 'storeon/react'
import tilesCss from './tiles.module.css'

import TileWrapper from './TileWrapper'

const HeatStatus = ({ zoneId }) => {
    const { [`zone.${zoneId}`]: zone } = useStoreon(`zone.${zoneId}`)
    const title = 'Heat Demand'

    if (!zone) return <TileWrapper title={title}>Loading...</TileWrapper>

    const demandStatus = zone?.demand?.status

    return (
        <TileWrapper title={title}>
            {demandStatus && <img className={tilesCss.primaryIcon} src="https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png" />}
            {!demandStatus && <div className={tilesCss.primaryMetricDisplay}>Off</div>}
        </TileWrapper>
    )
}

export default HeatStatus
