import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TodoList, UserList } from './components'
import { loadTodos } from './store/todos/todos-actions'
import { loadUsers } from './store/users/users-actions'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadTodos())
  })

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <UserList></UserList>
      <TodoList></TodoList>
    </div>
  )
}
