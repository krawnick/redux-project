import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../store/filters/filters-actions'
import { selectActiveFilter } from '../../store/filters/filters-selectors'

export const Filters = () => {
  // activeFilter = all || active || completed
  const activeFilter = useSelector(selectActiveFilter)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('all'))}
        style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        style={{ color: activeFilter === 'completed' ? 'red' : 'black' }}
      >
        Completed
      </button>
    </div>
  )
}
