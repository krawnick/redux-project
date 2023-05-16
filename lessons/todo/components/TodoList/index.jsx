import { useDispatch, useSelector } from 'react-redux'
import { selectVisibleTodos } from '../../store/todos/todos-selectors'
import { toggleTodo, deleteTodo } from '../../store/todos/todos-actions'
import { useParams } from 'react-router-dom'
// import { selectActiveFilter } from '../../store/filters/filters-selectors'

export const TodoList = () => {
  const dispatch = useDispatch()
  // const activeFilter = useSelector(selectActiveFilter)
  const { filter } = useParams()
  const todos = useSelector((state) => selectVisibleTodos(state, filter))
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
