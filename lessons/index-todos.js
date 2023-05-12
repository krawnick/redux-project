import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../src/App'
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

let nextTodoId = 0
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: ++nextTodoId,
          title: action.title,
          completed: false,
        },
      ]
    }

    case 'TOGGLE_TODO': {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    }

    case 'DELETE_TODO': {
      return state.filter((todo) => todo.id !== action.todoId)
    }

    default: {
      return state
    }
  }
}

const store = createStore(todos)

// action creators
const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
})

const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO',
  todoId,
})

const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  todoId,
})

console.log(store.getState())
store.dispatch(addTodo('learn react'))
console.log(store.getState())
store.dispatch(addTodo('learn redux'))
console.log(store.getState())
store.dispatch(toggleTodo(1))
console.log(store.getState())
store.dispatch(deleteTodo(2))
console.log(store.getState())

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
