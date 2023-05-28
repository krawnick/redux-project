import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { client } from '../api'

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client)))
)
