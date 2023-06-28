import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name))
  }
)

export const loadNeighboursByBorder = createAsyncThunk(
  '@@neighbours/load-neighbours-by-code',
  (neighbours, { extra: { client, api } }) => {
    return client.get(api.filterByCode(neighbours))
  }
)

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
  neighbours: [],
}

const detailsSLice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || action.meta.error
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = 'received'
        state.error = null
        state.currentCountry = action.payload.data[0]
      })
      .addCase(loadNeighboursByBorder.fulfilled, (state, action) => {
        state.status = 'received'
        state.error = null
        state.neighbours = action.payload.data
        console.log(state.neighbours)
      })
  },
})

export const { clearDetails } = detailsSLice.actions
export const detailsReducer = detailsSLice.reducer

export const selectCurrentCountry = (state) =>
  state.details.selectCurrentCountry
export const selectDetails = (state) => state.details
export const selectNeighbours = (state) => state.details.neighbours
