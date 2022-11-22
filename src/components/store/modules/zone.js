import enums from '../enums'
import hash from 'object-hash'

const safeHash = obj => hash(obj || {})

const zone = store => {
    store.on(enums.zone.update, (state, newZone) => {
        const {id} = newZone
        const existingZone = state[`zone.${id}`] || {}
        console.log('zone', {existingZone, id, newZone})
        if (safeHash(existingZone) !== safeHash(newZone)) {
            console.log('zone update', newZone)
            return { [`zone.${id}`]: newZone }
        }
    })
}

export default zone
