import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import config from '../config'

const useSocket = () => {
    const [message, setMessage] = useState({})

    const validZoneIds = config.zones.map(({ id }) => id)

    const { lastJsonMessage } = useWebSocket(
        config.webSocketUrl,
        {
            shouldReconnect: closeEvent => {
                console.log({closeEvent})
                return true
            },
            reconnectAttempts: 10,
            reconnectInterval: 3000,
        }
    )

    useEffect(() => {
        if (lastJsonMessage !== null) {
            console.log(validZoneIds, lastJsonMessage?.installedAppId)
            // if (`${lastJsonMessage?.installedAppId}` === `${config.apiId}`
            if (validZoneIds.includes(lastJsonMessage?.installedAppId)
                    && lastJsonMessage.type === 'heating-control'
                    && lastJsonMessage.name === 'status') {
                const value = {
                    ...JSON.parse(lastJsonMessage.value),
                    id: lastJsonMessage?.installedAppId,
                }
                setMessage(value)
            }
        }
    }, [lastJsonMessage])

    return { message }
}

export default useSocket
