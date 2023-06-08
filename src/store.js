import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit'
import { createStore } from 'redux'

const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.push(payload)
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    toggleTodo: (state, { payload }) => {
      const todo = state.find((todo) => todo.id === payload)
      todo.completed = !todo.completed
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export const store = configureStore({
  reducer: todoSlice.reducer,
  // reducer: {
  //   todos: todoSlice.reducer,
  // },
  devTools: true,
})

// export const store = createStore(
//   todoSlice.reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
