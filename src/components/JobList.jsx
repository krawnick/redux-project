import { connect } from 'react-redux'
import { selectVisiblePositon } from '../store/positions/positions-selectors'
import { JobPosition } from './JobPosition'
import { addFilter } from '../store/filters/filters-actions'

const _JobList = ({ positions, addFilter }) => {
  const handleAddFilter = (filter) => {
    addFilter(filter)
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
const mapStateToProps = (state) => ({
  positions: selectVisiblePositon(state, state.filters),
})
export const JobList = connect(mapStateToProps, { addFilter })(_JobList)
