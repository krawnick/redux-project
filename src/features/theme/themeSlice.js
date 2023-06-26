import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: { setTheme: (_, { payload }) => payload },
  extraReducers: {},
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
