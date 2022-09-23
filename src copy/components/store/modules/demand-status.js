import enums from '../enums'

const demandStatus = store => {
    store.on(enums.demandStatus.update, ({ demandStatus }, newStatus) => {
        if (demandStatus === newStatus) return null
        return { demandStatus: newStatus }
    })
}

export default demandStatus

