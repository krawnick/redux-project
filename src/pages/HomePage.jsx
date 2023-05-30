import { useNavigate } from 'react-router-dom'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import {
  selectAllCountries,
  selectAllCountriesInfo,
} from '../store/countries/countries-selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadCountries } from '../store/countries/countries-actions'

export const HomePage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const countries = useSelector(selectAllCountries)
  const { status, error, qty } = useSelector(selectAllCountriesInfo)

  useEffect(() => {
    dispatch(loadCountries())
  }, [qty, dispatch])

  return (
    <>
      <Controls />
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'recevied' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            }

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            )
          })}
        </List>
      )}
    </>
  )
}
