import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTodo,
  loadTodo,
  selectVisibleTodos,
  todosSelectors,
  toggleTodo,
} from '../todos-slice'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const TodoList = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.filters)
  const todos = useSelector(todosSelectors.selectAll)

  const visibleTodos = selectVisibleTodos(todos, activeFilter)

  const { error, loading } = useSelector((state) => state.todos)

  useEffect(() => {
    const promise = dispatch(loadTodo())
      .unwrap()
      .then(() => {
        toast('All todos were fetch')
      })
      .catch((error) => {
        console.log(error)
        toast(error)
      })
    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <>
      <ToastContainer />
      <ul>
        {error && <h2>{error}</h2>}
        {loading === 'loading' && <h2>Loading...</h2>}
        {loading === 'idle' &&
          !error &&
          visibleTodos.map((todo) => {
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
    </>
  )
}
