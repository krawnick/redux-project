import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todos-const'

let nextTodoId = 0

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: ++nextTodoId,
          title: action.title,
          completed: false,
        },
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id)
    }
    default: {
      return state
    }
  }
}
