import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTodo,
  addTodo,
  toggleTodo,
  resetToDefault,
  selectVisibleTodos,
} from './store'
import { FilterTodo } from './features'
import './index.css'

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo(redux-toolkit)</h1>
      <NewTodo />
      <FilterTodo />
      <TodoList />
      <ResetApp>reset app</ResetApp>
    </div>
  )
}

const ResetApp = () => {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(resetToDefault())}>reset app</button>
}

const NewTodo = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTodo(event.target.title.value))
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo..." />
      <input type="submit" value="Add todo" />
    </form>
  )
}

const TodoList = () => {
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
