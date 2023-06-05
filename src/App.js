import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, addTodo } from './store2'

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo(redux-toolkit)</h1>
      <NewTodo />
      <TodoList />
    </div>
  )
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
  const todos = useSelector((state) => state)
  console.log(todos)
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li onDoubleClick={() => dispatch(deleteTodo(todo.id))} key={todo.id}>
            {todo.title}
          </li>
        )
      })}
    </ul>
  )
}
