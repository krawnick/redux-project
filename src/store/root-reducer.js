import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-redusers'

export const rootReducer = combineReducers({
  theme: themeReducer,
})
