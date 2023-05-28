import { ADD_USERS, SET_ERROR, SET_LOADING } from './users-actions'

const initialState = {
  status: 'idle',
  list: [],
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        list: action.payload,
        status: 'fullfied',
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      }
    }
    case SET_ERROR: {
      console.error('error')
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
