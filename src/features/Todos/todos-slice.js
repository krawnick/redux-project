import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { resetToDefault } from '../ResetApp/reser-action'

const todosAdapter = createEntityAdapter({
  selectId: (todo) => todo.id,
})

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
    const todo = getState().todos.entities[id]
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
  // initialState: {
  //   entities: [],
  //   loading: 'idle', // 'loading'
  //   error: null,
  // },
  initialState: todosAdapter.getInitialState({
    loading: 'idle', // 'loading'
    error: null,
  }),
  reducers: {
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodo.fulfilled, (state, action) => {
        todosAdapter.addMany(state, action.payload)
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        todosAdapter.addOne(state, action.payload)
        // state.entities.push(action.payload)
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload
        // const index = state.entities.findIndex(
        //   (todo) => todo.id === updatedTodo.id
        // )
        // state.entities[index] = updatedTodo
        todosAdapter.updateOne(state, {
          id: updatedTodo.id,
          changes: {
            completed: updatedTodo.completed,
          },
        })
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        todosAdapter.removeOne(state, action.payload)
      })
      .addCase(resetToDefault, () => ({
        entities: [],
        loading: 'idle', // 'loading'
        error: null,
      }))
      .addCase(loadTodo.pending(), (state) => {
        state.loading = 'loading'
        state.error = null
      })
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

export const selectVisibleTodos = (todos = [], filter) => {
  switch (filter) {
    case 'all': {
      return todos
    }
    case 'active': {
      return todos.filter((todo) => todo.completed === false)
    }
    case 'completed': {
      return todos.filter((todo) => todo.completed === true)
    }
    default: {
      return todos
    }
  }
}
export const todosSelectors = todosAdapter.getSelectors((state) => state.todos)
export const todosReducer = todosSlice.reducer
