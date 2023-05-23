import { useSelector } from 'react-redux'

export const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
