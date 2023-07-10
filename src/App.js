import './scss/App.scss';
import { RoutesComp } from './routers/Router';
import { Context } from './contexts/Context';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch("https://restcountries.com/v3.1/all")
      const json = await res.json()
      const pickedValues = await json.map(x => {
        return {
          name: x.name.common,
          nativeName: x.name.nativeName,
          population: x.population,
          region: x.region,
          capital: x.capital,
          flag: {
            img: x.flags.png,
            alt: x.flags.alt,
          },
          subregion: x.subregion,
          topLevelDomain: x.tld,
          borders: x.borders,
          cca3: x.cca3
        }
      })

      setCountries(pickedValues)
      setFilteredCountries(pickedValues)
    }

    fetchApi()
  }, [])

  const contextValue = {
    countries: {
      countries: countries,
      setCountries: setCountries
    },
    filteredCountries: {
      filteredCountries: filteredCountries,
      setFilteredCountries: setFilteredCountries
    }
  }

  return (
    <Context.Provider value={contextValue}>
      <RoutesComp />
    </Context.Provider>
  )
}

export default App;
