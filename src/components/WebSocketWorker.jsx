import { useStoreon } from 'storeon/react'
import enums from './store/enums'

import useSocket from '../hooks/use-socket'

const WebSocketWorker = () => {
    const { message } = useSocket()
	const { dispatch } = useStoreon('dispatch')

    if (message) {
        // dispatch(enums.room.update, message)
        dispatch(enums.zone.update, message)
    }
}

export default WebSocketWorker
