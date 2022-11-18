import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

const Clock = () => {
    const [time, setTime] = useState(dayjs());
    const interval = setInterval(() => setTime(dayjs()), 1000)
    useEffect(() => () => clearInterval(interval), [])

    return time.format('dddd Do MMMM YYYY, HH.mm')
}

export default Clock
