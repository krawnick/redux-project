import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'
import { createStore } from 'redux'

// Actions const

// export const ADD_TODO = '@@todos/ADD_TODO'
// export const TOGGLE_TODO = '@@todos/TOGGLE_TODO'
// export const DELETE_TODO = '@@todos/DELETE_TODO'

// Actions creators

export const addTodo = createAction('@@todos/ADD_TODO', (title) => ({
  payload: {
    title,
    id: nanoid(),
    completed: false,
  },
}))
export const deleteTodo = createAction('@@todos/DELETE_TODO')
export const toggleTodo = createAction('@@todos/TOGGLE_TODO')

// export const addTodo = (title) => {
//   return {
//     type: ADD_TODO,
//     title,
//   }
// }

// export const toggleTodo = (id) => {
//   return {
//     type: TOGGLE_TODO,
//     id,
//   }
// }
// export const toggleTodo = createAction('@@todos/TOGGLE_TODO')

// export const deleteTodo = (id) => {
//   return {
//     type: DELETE_TODO,
//     id,
//   }
// }
// export const deleteTodo = createAction('@@todos/DELETE_TODO')

const todos = createReducer([], (builder) => {
  builder.addCase(addTodo, (state, action) => {
    return [
      ...state,
      {
        ...action.payload,
      },
    ]
  })
  builder.addCase(toggleTodo, (state, action) => {
    return state.map((todo) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : { todo }
    )
  })
  builder.addCase(deleteTodo, (state, action) =>
    state.filter((todo) => todo.id !== action.payload)
  )
})

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.toString(): {
//       return [
//         ...state,
//         {
//           ...action.payload,
//         },
//       ]
//     }
//     case toggleTodo.toString(): {
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? {
//               ...todo,
//               completed: !todo.completed,
//             }
//           : todo
//       )
//     }
//     case deleteTodo.toString(): {
//       return state.filter((todo) => todo.id !== action.payload)
//     }
//     default: {
//       return state
//     }
//   }
// }

export const store = createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
