import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import * as api from './config'

export const store = configureStore({
  reducer: {},
  devTools: true,
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
})
