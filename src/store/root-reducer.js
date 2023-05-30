import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-redusers'
import { countriesReducer } from './countries/countries-reducers'

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
})
