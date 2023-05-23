import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TodoList, UserList } from './components'
import { loadUsers } from './store/users/users-actions'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  })

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <TodoList></TodoList>
      <UserList></UserList>
    </div>
  )
}
