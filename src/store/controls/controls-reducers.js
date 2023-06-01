import { SET_CLEAR, SET_REGION, SET_SEARCH } from './controls-actions'

const initialState = {
  search: '',
  region: '',
}

export const controlsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: payload,
      }
    }
    case SET_REGION: {
      return {
        ...state,
        region: payload,
      }
    }
    case SET_CLEAR: {
      return initialState
    }
    default: {
      return state
    }
  }
}
