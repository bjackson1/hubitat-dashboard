import { useEffect, useState } from 'react'
import hubitat from '../lib/hubitat'

const useApp = () => {
    const [room, setRoom] = useState()

    useEffect(() => {
        const loadRoom = async () => {
            const loadedRoom = await hubitat.getRoom()
            setRoom(loadedRoom)
        }
        loadRoom()
    }, [])

    const setTargetTemperature = async targetTemperature => {
        await hubitat.setTargetTemperature(targetTemperature)
    }

    return { setTargetTemperature }
}

export default useApp
