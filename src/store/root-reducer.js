import { combineReducers } from 'redux'
import { userReducer } from '../store/users/users-reducers'

export const rootReducer = combineReducers({ users: userReducer })
