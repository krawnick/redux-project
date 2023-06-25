import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'

export const loadTodo = createAsyncThunk(
  '@@todos/load-all',
  async (_, { rejectWithValue, extra: api }) => {
    try {
      return api.loadTodo()
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.message)
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const { loading } = getState().todos
      if (loading === 'loadind') {
        return false
      }
    },
  }
)

export const toggleTodo = createAsyncThunk(
  '@@todos/toggle-todo',
  async (id, { getState, extra: api }) => {
    const todo = getState().todos.entities.find((todo) => todo.id === id)
    return api.toggleTodo(id, { completed: !todo.completed })
  }
)

export const deleteTodo = createAsyncThunk(
  '@@todos/delete-todo',
  async (id, { extra: api }) => {
    return api.deleteTodo(id)
  }
)

export const createTodo = createAsyncThunk(
  '@@todos/create-todo',
  async (title, { extra: api }) => {
    return api.createTodo(title)
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
      .addCase(loadTodo.fulfilled, (state, action) => {
        state.entities = action.payload
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
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = 'idle'
          state.error = action.payload
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = 'idle'
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
