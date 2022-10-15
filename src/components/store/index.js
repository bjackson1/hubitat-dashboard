import { createStoreon } from 'storeon'

import atmosphere from './modules/atmosphere'
import demandStatus from './modules/demand-status'
import targetTemperature from './modules/target-temperature'
import room from './modules/room'

const store = createStoreon([
	atmosphere,
	demandStatus,
	targetTemperature,
	room,
])

export default store
