import { useDispatch, useSelector } from 'react-redux'
import { selectVisiblePositon } from '../store/positions/positions-selectors'
import { JobPosition } from './JobPosition'
import { addFilter } from '../store/filters/filters-actions'
import { selectFilters } from '../store/filters/filters-selectors'

export const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) =>
    selectVisiblePositon(state, currentFilters)
  )

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}
