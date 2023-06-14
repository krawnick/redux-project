import { useSelector } from 'react-redux'
import { selectVisiblePositon } from './positions-slice'
import { selectFitlers } from '../filter/filter-slice'

export const usePositions = () => {
  const currentFilters = useSelector(selectFitlers)
  const positions = useSelector((state) =>
    selectVisiblePositon(state, currentFilters)
  )
  return positions
}
