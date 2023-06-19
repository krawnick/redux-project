import { createSlice } from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'

export const filterSlice = createSlice({
  name: '@@filter',
  initialState: 'all',
  reducers: {
    setFilter: (_, action) => {
      return action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => 'all')
  },
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
