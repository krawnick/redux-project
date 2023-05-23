import { combineReducers } from 'redux'
import { userReducer } from '../store/users/users-reducers'
import { todosReducer } from '../store/todos/todos-reducers'

export const rootReducer = combineReducers({
  users: userReducer,
  todos: todosReducer,
})
