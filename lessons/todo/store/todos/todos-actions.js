import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todos-const'

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
