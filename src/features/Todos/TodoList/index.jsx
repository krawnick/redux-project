import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTodo,
  loadTodo,
  selectVisibleTodos,
  toggleTodo,
} from '../todos-slice'
import { useEffect } from 'react'

export const TodoList = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.filters)
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter))

  const { error, loading } = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(loadTodo())
  }, [dispatch])

  return (
    <ul>
      {error && <h2>Error to loading</h2>}
      {loading === 'loading' && <h2>Loading...</h2>}
      {loading === 'idle' &&
        !error &&
        todos.map((todo) => {
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
