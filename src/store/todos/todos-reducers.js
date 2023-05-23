import { ADD_TODOS } from './todos-actions'

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODOS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
