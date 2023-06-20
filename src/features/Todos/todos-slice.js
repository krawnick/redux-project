import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'

export const loadTodo = createAsyncThunk('@@todos/load-all', async () => {
  const res = await fetch('http://localhost:3001/todos')
  const data = await res.json()
  return data
})

export const toggleTodo = createAsyncThunk(
  '@@todos/toggle-todo',
  async (id, { getState }) => {
    const todo = getState().todos.entities.find((todo) => todo.id === id)
    const res = await fetch('http://localhost:3001/todos/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
    const data = await res.json()
    return data
  }
)

export const deleteTodo = createAsyncThunk(
  '@@todos/delete-todo',
  async (id) => {
    console.log(id)
    const res = await fetch('http://localhost:3001/todos/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    await res.json()
    return id
  }
)

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
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodo.rejected, (state) => {
        state.loading = 'idle'
        state.error = 'Something went wrong!'
      })
      .addCase(loadTodo.fulfilled, (state, action) => {
        state.entities = action.payload
        state.loading = 'idle'
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.entities.push(action.payload)
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload
        const index = state.entities.findIndex(
          (todo) => todo.id === updatedTodo.id
        )
        state.entities[index] = updatedTodo
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.entities = state.entities.filter(
          (todo) => todo.id !== action.payload
        )
      })
      .addCase(resetToDefault, () => ({
        entities: [],
        loading: 'idle', // 'loading'
        error: null,
      }))
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = 'loading'
          state.error = null
        }
      )
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

export const todosReducer = todosSlice.reducer
