import {
  CLEAR_DETAILS,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBOURS,
} from './details-actions'

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
  neighbours: [],
}

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        error: null,
        status: 'loading',
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
        status: 'rejected',
      }
    }
    case SET_COUNTRY: {
      return {
        ...state,
        currentCountry: payload,
        status: 'recevied',
      }
    }
    case CLEAR_DETAILS: {
      return initialState
    }

    case SET_NEIGHBOURS: {
      return {
        ...state,
        neighbours: payload,
      }
    }
    default: {
      return state
    }
  }
}
