import { useDispatch, useSelector } from 'react-redux'
import { allTodos, activeTodos } from '../../store/todos/todos-selectors'
import { toggleTodo, deleteTodo } from '../../store/todos/todos-actions'

export const TodoList = () => {
  const todos = useSelector(allTodos)
  const dispatch = useDispatch()
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.title}>
            <input
              type="checkbox"
              onChange={() => {
                dispatch(toggleTodo(todo.id))
              }}
              checked={todo.competed}
            />
            {todo.title}{' '}
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id))
              }}
            >
              delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}
