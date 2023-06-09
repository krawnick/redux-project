import { createStore, applyMiddleware /*compose*/ } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
    default: {
      return state
    }
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWare = []

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger)
}

// const myLogger = (state) => (next) => (action) => {
//   console.log('dispatched an action', action.type)
//   next(action)
//   console.log('update state is', store.getState())
// }

// export const store = createStore(
//   counter,
//   composeEnhancers(applyMiddleware(...middleWare) /* myLogger */)
// )

export const store = createStore(
  counter,
  composeWithDevTools(applyMiddleware(...middleWare) /* myLogger */)
)

// actions

export const increment = { type: 'INCREMENT' }
export const decrement = { type: 'DECREMENT' }
export const reset = { type: 'RESET' }
