import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/todos/todos-actions'

export const TodoForm = () => {
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
