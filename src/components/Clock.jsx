import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

const Clock = () => {
    const [time, setTime] = useState('no time');
    const interval = setInterval(() => setTime(dayjs().format('dddd Do MMMM YYYY, HH:mm')), 5000)
    useEffect(() => () => clearInterval(interval), [])

    return time
}

export default Clock
