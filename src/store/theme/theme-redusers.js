import { SET_THEME } from './theme-actions'

export const themeReducer = (state = 'light', { type, payload }) => {
  switch (type) {
    case SET_THEME: {
      console.log('theme-reducers.js SET_THEME', payload)

      return payload
    }
    default: {
      console.log('theme-reducers.js default', payload)
      return state
    }
  }
}
