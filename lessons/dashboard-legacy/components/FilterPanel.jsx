import { connect } from 'react-redux'
import { Badge } from '../UI/Badge'
import { Card } from '../UI/Card'
import { Stack } from '../UI/Stack'
import { clearFilter, removeFilter } from '../store/filters/filters-actions'

const _FilterPanel = ({ currentFilters, clearFilter, removeFilter }) => {
  if (currentFilters.length === 0) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => {
            return (
              <Badge
                key={filter}
                onClear={() => removeFilter(filter)}
                variant="clearable"
              >
                {filter}
              </Badge>
            )
          })}
        </Stack>

        <button className="link" onClick={() => clearFilter()}>
          Clear
        </button>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  currentFilters: state.filters,
})

export const FilterPanel = connect(mapStateToProps, {
  clearFilter,
  removeFilter,
})(_FilterPanel)
