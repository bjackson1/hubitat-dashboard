import React from 'react'
import { useStoreon } from 'storeon/react'
import tilesCss from './tiles.module.css'

const HeatStatus = () => {
	const { demandStatus } = useStoreon('demandStatus')

    return (
        <div className={tilesCss.tile}>
            <div className={tilesCss.tileTitle}>Heat Status</div>
            <div className={`${tilesCss.tileBody}`}>
                {demandStatus && <img className={tilesCss.primaryIcon} src="https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png" />}
                {!demandStatus && <div className={tilesCss.primaryMetricDisplay}>Off</div>}
            </div>
        </div>
    )
}

export default HeatStatus
