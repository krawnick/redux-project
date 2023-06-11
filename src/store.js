import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { filterReducer } from './features/Filters/filtes-slice'
import { todosReducer } from './features/Todos/todos-slice'

export const store = configureStore({
  // reducer: todoSlice.reducer,
  reducer: {
    todos: todosReducer,
    filters: filterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  enhancers: [],
})

// export const store = createStore(
//   todoSlice.reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
