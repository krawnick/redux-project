import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './root-reducer'
import thunk from 'redux-thunk'
import * as api from '../config'
import axios from 'axios'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
)
