import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import config from '../config'


const useSocket = () => {
    const [socketUrl, setSocketUrl] = useState(config.webSocketUrl)
    const [message, setMessage] = useState({})

    const { lastMessage } = useWebSocket(socketUrl)

    useEffect(() => {
        if (lastMessage !== null) {
            const data = JSON.parse(lastMessage.data)
            setMessage(data)
        }
    }, [lastMessage])

    return { message }
}

export default useSocket
