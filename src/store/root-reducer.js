import { combineReducers } from 'redux'
import { positionsReducer } from './positions/positions-reducers'

export const rootReducer = combineReducers({
  positions: positionsReducer,
})
