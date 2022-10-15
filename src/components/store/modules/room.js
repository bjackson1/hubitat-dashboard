import enums from '../enums'
import hash from 'object-hash'

const safeHash = obj => hash(obj || {})

const room = store => {
    store.on(enums.room.update, ({ room: existingRoom }, newRoom) => {
        if (safeHash(existingRoom) !== safeHash(newRoom)) {
            console.log('room', newRoom)
            return { room: newRoom }
        }
    })
}

export default room
