import React from 'react'
import TargetTemperature from './TargetTemperature'
import TemperatureAndHumidity from './TemperatureAndHumidity'
import { TileWrapper } from '.'

const Zone = ({ id, label, setTargetTemperature }) => {
    return <TileWrapper title={label}>
        <TemperatureAndHumidity zoneId={id} />
        <TargetTemperature zoneId={id} setTargetTemperature={setTargetTemperature} />
    </TileWrapper>
}

export default Zone
