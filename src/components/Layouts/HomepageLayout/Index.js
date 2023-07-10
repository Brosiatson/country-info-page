import { Header } from '../../Other/Header/Index'
import { CountriesElement } from '../../Other/CountriesElement/CountriesElement'
import { useContext } from "react"
import { Context } from "../../../contexts/Context"
import { CountriesFilter } from '../../Other/CountriesFilter/Index'

export function HomepageLayout() {
    const {filteredCountries: {filteredCountries}} = useContext(Context)

    const countriesMap = filteredCountries.length ? 
        filteredCountries.map(country => <CountriesElement key={country.name} countryData={country}/>) : 
        <p className='countries-list__no-results'>No results</p>

    return(
        <>
            <Header />
            <main>
                <CountriesFilter />
                <section className='countries-list'>
                    {countriesMap}
                </section>
            </main>
        </>
    )
}