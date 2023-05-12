import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './store'

export default function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  )
}

const TodoForm = () => {
  const dispatch = useDispatch()

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatch(addTodo(event.target.title.value))
    event.target.reset()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="title" placeholder="Введите задачу"></input>
      <input type="submit" value="Добавить задачу"></input>
    </form>
  )
}

const TodoList = () => {
  const todos = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <ul>
      {todos.map((todo) => {
        console.log(todo.completed)
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
