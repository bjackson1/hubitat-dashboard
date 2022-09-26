import { useStoreon } from 'storeon/react'
import enums from './store/enums'

import useSocket from '../hooks/use-socket'

const WebSocketWorker = () => {
    const { message } = useSocket()
	const { dispatch } = useStoreon('dispatch')

    if (message) {
        // console.log({message})
        if (message?.name === 'demandStatus') dispatch(enums.demandStatus.update, message.value === 'true')
        if (message?.name === 'humidity') dispatch(enums.atmosphere.updateHumidity, message.value)
        if (message?.name === 'temperature') dispatch(enums.atmosphere.updateTemperature, message.value)
        if (message?.name === 'targetTemperature') dispatch(enums.targetTemperature.update, JSON.parse(message.value))
    }
}

export default WebSocketWorker
