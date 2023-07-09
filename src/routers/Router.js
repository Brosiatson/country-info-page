import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomepageLayout } from "../components/Layouts/HomepageLayout/Index"
import { CountryLayout } from "../components/Layouts/CountryLayout/Index"
import { useContext } from "react"
import { Context } from "../contexts/Context"

export function RoutesComp() {
    const {countries: {countries}} = useContext(Context)

    const countryRoutesMap = countries.map(country => <Route path={country.name} element={<CountryLayout data={country}/>} />)

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomepageLayout />}/>
                <Route path="country">
                    {countryRoutesMap}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}