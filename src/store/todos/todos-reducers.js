import { ADD_TODOS, SET_ERROR, SET_LOADING } from './todos-actions'

const initialState = {
  status: 'idle',
  list: [],
  error: null,
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS: {
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
