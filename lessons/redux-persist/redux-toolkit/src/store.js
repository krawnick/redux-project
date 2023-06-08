import { createStore } from 'redux'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

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

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    title,
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  }
}

export const store = createStore(todos)
