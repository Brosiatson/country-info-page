import { Header } from '../../Other/Header/Index'
import { CountriesElement } from '../../Other/CountriesElement/CountriesElement'
import { useContext } from "react"
import { Context } from "../../../contexts/Context"
import { CountriesFilter } from '../../Other/CountriesFilter/Index'

export function HomepageLayout() {
    const {filteredCountries: {filteredCountries}} = useContext(Context)

    const countriesMap = filteredCountries.map(country => <CountriesElement countryData={country}/>)

    return(
        <>
            <Header />
            <main>
                <CountriesFilter />
                {countriesMap}
            </main>
        </>
    )
}