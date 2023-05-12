import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }

  if (action.type === 'DECREMENT') {
    return state - 1
  }

  if (action.type === 'RESET') {
    return 0
  }

  return state
}

const store = createStore(counter)

const increment = {
  type: 'INCREMENT',
}

const decrement = {
  type: 'DECREMENT',
}

const reset = {
  type: 'RESET',
}

const count = document.createElement('div')
count.id = 'count'
count.innerText = store.getState()
document.body.append(count)

const decBtn = document.createElement('button')
decBtn.innerHTML = '-'
decBtn.onclick = () => store.dispatch(decrement)
document.body.append(decBtn)

const incBtn = document.createElement('button')
incBtn.innerHTML = '+'
incBtn.onclick = () => store.dispatch(increment)
document.body.append(incBtn)

const resetBtn = document.createElement('button')
resetBtn.onclick = () => store.dispatch(reset)
resetBtn.innerHTML = 'reset'
document.body.append(resetBtn)

const render = () => {
  document.getElementById('count').innerText = store.getState()
}

store.subscribe(render)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
