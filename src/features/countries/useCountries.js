import { useDispatch, useSelector } from 'react-redux'
import {
  loadCountries,
  selectAllCountriesInfo,
  selectVisibleCountries,
} from './countriesSlice'
import { selectControls } from '../controls/controlsSlice'
import { useEffect } from 'react'

export const useCoutries = () => {
  const dispatch = useDispatch()
  const { status, error, qty } = useSelector(selectAllCountriesInfo)
  const controls = useSelector(selectControls)
  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls)
  )
  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries())
    }
  }, [qty, dispatch])

  return [countries, { status, error }]
}
