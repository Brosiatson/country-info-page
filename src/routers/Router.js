import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomepageLayout } from "../components/Layouts/HomepageLayout/Index"
import { CountryLayout } from "../components/Layouts/CountryLayout/Index"
import { useContext } from "react"
import { Context } from "../contexts/Context"

export function RoutesComp() {
    const {countries: {countries}} = useContext(Context)

    const countryRoutesMap = countries.map(country => <Route key={country.name} path={country.cca3} element={<CountryLayout key={country.name} data={country}/>} />)

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/country-info-page">
                    <Route path="" element={<HomepageLayout />}/>
                    <Route path="country">
                        {countryRoutesMap}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}