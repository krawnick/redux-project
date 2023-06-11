import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, selectVisibleTodos, toggleTodo } from '../todos-slice'

export const TodoList = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.filters)
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter))
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {
                dispatch(toggleTodo(todo.id))
              }}
              checked={todo.completed}
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
