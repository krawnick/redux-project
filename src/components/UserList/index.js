import { useSelector } from 'react-redux'

export const UserList = () => {
  const users = useSelector((state) => state.users)

  return (
    <div style={{ padding: '20px' }}>
      <ul>
        Number of users {users.length}
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}
