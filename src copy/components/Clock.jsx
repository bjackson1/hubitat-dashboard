import { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(Date.now());
    const interval = setInterval(() => setTime(Date.now()), 1000)
    useEffect(() => () => clearInterval(interval), [])

    const formatted = (new Date(time)).toLocaleString()

    return formatted.substring(0, formatted.length - 3)
}

export default Clock
