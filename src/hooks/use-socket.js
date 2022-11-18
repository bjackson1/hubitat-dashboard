import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import config from '../config'

const useSocket = () => {
    const [message, setMessage] = useState({})

    const { lastJsonMessage } = useWebSocket(
        config.webSocketUrl,
        {
            shouldReconnect: closeEvent => {
                console.log({closeEvent})
                return true
            },
        }
    )

    useEffect(() => {
        if (lastJsonMessage !== null) {
            if (`${lastJsonMessage?.installedAppId}` === `${config.apiId}`
                    && lastJsonMessage.type === 'heating-control'
                    && lastJsonMessage.name === 'status') {
                const value = JSON.parse(lastJsonMessage.value)
                setMessage(value)
            }
        }
    }, [lastJsonMessage])

    return { message }
}

export default useSocket
