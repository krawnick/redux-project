import { combineReducers } from 'redux'
import { filterReducer } from './filters/filters-reducers'
import { positionsReducer } from './positions/positions-reducers'

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
})
