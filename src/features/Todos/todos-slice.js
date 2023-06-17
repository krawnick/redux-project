import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'
import { useDispatch } from 'react-redux'

export const loadTodo = createAsyncThunk('@@todos/load-todo-all', async () => {
  const res = await fetch('http://localhost:3001/todos')
  const data = await res.json()
  console.log(data)
  return data
})

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
      .addCase(loadTodo.pending, (state) => {
        state.loading = 'loading'
        state.error = null
      })
      .addCase(loadTodo.rejected, (state) => {
        state.loading = 'idle'
        state.error = 'Something went wrong!'
      })
      .addCase(loadTodo.fulfilled, (state, action) => {
        state.entities = action.payload
        state.loading = 'loading'
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.entities.push(action.payload)
      })
      .addCase(resetToDefault, () => [])
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
      return state.todos
    }
  }
}

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer
