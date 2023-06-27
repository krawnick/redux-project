import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadCoutries = createAsyncThunk(
  '@@countries/load-countries',
  async (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES)
  }
)

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCoutries.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadCoutries.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || action.meta.error
      })
      .addCase(loadCoutries.fulfilled, (state, { payload }) => {
        state.status = 'received'
        state.list = payload.data
      })
  },
})

export const countriesReducer = countriesSlice.reducer

export const selectAllCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
})
export const selectAllCountries = (state) => state.countries.list
export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  )
}
