import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './features/Filters/filtes-slice'
import { todosReducer } from './features/Todos/todos-slice'
import { combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import logger from 'redux-logger'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
})

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer: todoSlice.reducer,
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Исключение возможности конфликтов middleware с persist
      serializableCheck: {
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      },
    }) /*.concat(logger)*/,
  enhancers: [],
})

export const persistor = persistStore(store)

// export const store = createStore(
//   todoSlice.reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
