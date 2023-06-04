import { useDispatch } from 'react-redux'
import { addTodo } from './store'

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo(redux-toolkit)</h1>
      <NewTodo />
      {/* <TodoList /> */}
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
