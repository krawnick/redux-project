import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from './filtes-slice'

export const FilterTodo = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.filters)
  const handleFilter = (filter) => dispatch(setFilter(filter))
  return (
    <div
      style={{
        display: 'flex',
        gap: '0 10px',
        justifyContent: 'center',
        marginTop: '10px',
      }}
    >
      <button
        style={{ background: activeFilter === 'all' ? 'lightgrey' : 'none' }}
        onClick={() => handleFilter('all')}
      >
        All
      </button>
      <button
        style={{ background: activeFilter === 'active' ? 'lightgrey' : 'none' }}
        onClick={() => handleFilter('active')}
      >
        Active
      </button>
      <button
        style={{
          background: activeFilter === 'completed' ? 'lightgrey' : 'none',
        }}
        onClick={() => handleFilter('completed')}
      >
        completed
      </button>
    </div>
  )
}
