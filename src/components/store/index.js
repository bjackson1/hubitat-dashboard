import { createStoreon } from 'storeon'

import atmosphere from './modules/atmosphere'
import demandStatus from './modules/demand-status'
import targetTemperature from './modules/target-temperature'
import room from './modules/room'
import zone from './modules/zone'

const store = createStoreon([
	atmosphere,
	demandStatus,
	targetTemperature,
	room,
	zone,
])

export default store
