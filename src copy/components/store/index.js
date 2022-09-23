import { createStoreon } from 'storeon'

import atmosphere from './modules/atmosphere'
import demandStatus from './modules/demand-status'
import targetTemperature from './modules/target-temperature'

const store = createStoreon([
	atmosphere,
	demandStatus,
	targetTemperature,
])

export default store
