import { useSelector } from 'react-redux'

export const UserList = () => {
  const { list: users, status, error } = useSelector((state) => state.users)

  return (
    <div style={{ padding: '20px' }}>
      <ul>
        Number of users {users.length}
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}
