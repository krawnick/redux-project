import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'

export const createTodo = createAsyncThunk(
  '@@todos/create-todo',
  async (title) => {
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    })
    const data = await res.json()
    return data
  }
)

export const todosSlice = createSlice({
  name: '@@todos',
  initialState: {
    entities: [],
    loading: 'idle', // 'loading'
    error: null,
  },
  reducers: {
    toggleTodo: (state, { payload }) => {
      const todo = state.find((todo) => todo.id === payload)
      todo.completed = !todo.completed
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => [])
      .addCase(createTodo.pending, (state, action) => {
        state.loading = 'loading'
        state.error = null
      })
      .addCase(createTodo.rejected, (state) => {
        state.loading = 'idle'
        state.error = 'Something went wrong!'
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.entities.push(action.payload)
      })
  },
})

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos.entities
    }
    case 'active': {
      return state.todos.entities.filter((todo) => todo.completed === false)
    }
    case 'completed': {
      return state.todos.entities.filter((todo) => todo.completed === true)
    }
    default: {
      return state.todos.entities
    }
  }
}

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer
