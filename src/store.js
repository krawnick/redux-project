import {
  configureStore,
  createAction,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

export const resetToDefault = createAction('root/reset-app')

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
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => [])
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export const store = configureStore({
  reducer: todoSlice.reducer,
  // reducer: {
  //   todos: todoSlice.reducer,
  // },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: [{ id: '1', title: 'Hello', completed: true }],
  enhancers: [],
})

// export const store = createStore(
//   todoSlice.reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
