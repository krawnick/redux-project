import { useSelector } from 'react-redux'
import { selectVisiblePositon } from './positions-slice'
import { selectFilters } from '../filter/filter-slice'

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) =>
    selectVisiblePositon(state, currentFilters)
  )
  return positions
}
