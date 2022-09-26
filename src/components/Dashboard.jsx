import React from 'react'

import { StoreContext } from 'storeon/react'
import useApp from '../hooks/use-app'
import store from './store'

import { Boost, HeatStatus, TargetTemperature, TemperatureAndHumidity } from './tiles'
import Clock from './Clock'
import WebSocketWorker from './WebSocketWorker'

import css from './Dashboard.module.css'

const Dashboard = () => {
    const { setTargetTemperature } = useApp()

    const refresh = () => window.location.reload()

    return (
        <StoreContext.Provider value={store}>
            <div className={css.dashboard}>
                <div className={css.titleBar}>
                    <div>Living Room</div>
                    <div><Clock /></div>
                </div>
                <div className={css.tiles}>
                    <TemperatureAndHumidity />
                    <HeatStatus />
                    <TargetTemperature setTargetTemperature={setTargetTemperature} />
                    <WebSocketWorker />
                    {/* <Boost /> */}
                </div>
                <button className={css.refreshButton} onClick={refresh}>&nbsp;</button>
            </div>
        </StoreContext.Provider>
    )
}

export default Dashboard
