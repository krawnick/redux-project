import { createSlice } from '@reduxjs/toolkit'

export const resetApp = createSlice({
  name: '@@reset',
  initialState: {},
  reducers: {
    reset: () => ({
      todos: {
        entities: [],
        loading: 'idle', // 'loading'
        error: null,
      },
      filters: 'all',
    }),
  },
  // extraReducers: (builder) => {
  //   builder.addCase(reset, () => [])
  // },
})

export const resetReducer = resetApp.reducer
export const { reset } = resetApp.actions
