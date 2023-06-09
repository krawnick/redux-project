import {
  configureStore,
  createAction,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

export const resetToDefault = createAction('root/reset-app')

const filterSlice = createSlice({
  name: '@@filter',
  initialState: 'all',
  reducers: {
    setFilter: (_, action) => {
      return action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => [])
  },
})

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos
    }
    case 'active': {
      return state.todos.filter((todo) => todo.completed === false)
    }
    case 'completed': {
      return state.todos.filter((todo) => todo.completed === true)
    }
    default: {
      return state.todos
    }
  }
}

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
export const { setFilter } = filterSlice.actions

export const store = configureStore({
  // reducer: todoSlice.reducer,
  reducer: {
    todos: todoSlice.reducer,
    filters: filterSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  enhancers: [],
})

// export const store = createStore(
//   todoSlice.reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
