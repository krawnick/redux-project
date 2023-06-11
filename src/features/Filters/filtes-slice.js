import { createSlice } from '@reduxjs/toolkit'
import { resetToDefault } from '../../store'

export const filterSlice = createSlice({
  name: '@@filter',
  initialState: 'all',
  reducers: {
    setFilter: (_, action) => {
      return action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => [])
  },
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
