import { FilterTodo, ResetApp } from './features'
import { NewTodo, TodoList } from './features/Todos'
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
