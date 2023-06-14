import { filterReducer } from './features/filter/filter-slice'
import { positionsReducer } from './features/positions/positions-slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    positions: positionsReducer,
  },
  devTools: true,
})
