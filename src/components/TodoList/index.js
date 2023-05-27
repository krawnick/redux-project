import { useSelector } from 'react-redux'

export const TodoList = () => {
  const { list: todos, status, error } = useSelector((state) => state.todos)
  return (
    <div>
      Todos: {todos.length}. Status: {status}.
      {error && <h4>Ошибка загрузки todos ({error})</h4>}
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}
