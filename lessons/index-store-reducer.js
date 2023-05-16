import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }

  return state
}

const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
