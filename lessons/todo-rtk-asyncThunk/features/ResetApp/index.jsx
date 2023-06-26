import { useDispatch } from 'react-redux'
import { resetToDefault } from './reser-action'

export const ResetApp = () => {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(resetToDefault())}>reset app</button>
}
