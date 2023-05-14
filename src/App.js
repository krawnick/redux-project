import { Filters, TodoForm, TodoList } from './components'

export default function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoForm></TodoForm>
      <Filters></Filters>
      <TodoList></TodoList>
    </div>
  )
}
