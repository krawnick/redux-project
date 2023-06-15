import { createSlice, nanoid } from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'

export const todosSlice = createSlice({
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

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer
