import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './features/filter/filter-slice'
import { positionsReducer } from './features/positions/positions-slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    positions: positionsReducer,
  },
  devTools: true,
})
