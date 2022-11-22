import React from 'react'

import { StoreContext } from 'storeon/react'
import useApp from '../hooks/use-app'
import store from './store'

import { Boost, HeatStatus, Reloader, TargetTemperature, TemperatureAndHumidity, Zone } from './tiles'
import Clock from './Clock'
import WebSocketWorker from './WebSocketWorker'

import css from './Dashboard.module.css'

const Dashboard = () => {
    const { setTargetTemperature } = useApp()

    const zones = window?.heatingZones?.map(zone => <Zone id={zone.id} label={zone.label} setTargetTemperature={setTargetTemperature} />) || []

    return (
        <StoreContext.Provider value={store}>
            <WebSocketWorker />
            <div className={css.dashboard}>
                <div className={css.titleBar}>
                    <div>Living Room</div>
                    <div><Clock /></div>
                </div>
                <div className={css.tiles}>
                    {/* <TemperatureAndHumidity />
                    <HeatStatus />
                    <TargetTemperature setTargetTemperature={setTargetTemperature} />
                    <TemperatureAndHumidity location="outside" /> */}
                    {zones}
                    <Reloader />
                </div>
            </div>
        </StoreContext.Provider>
    )
}

export default Dashboard
