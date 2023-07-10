import { Link } from "react-router-dom"
import { CountryInfo } from "../../Other/CountryInfo/Index"
import { Header } from "../../Other/Header/Index"

export function CountryLayout({data}) {
    return(
        <>
            <Header />
            <main>
                <Link className="country__link" to={-1}>Back</Link>
                <CountryInfo countryData={data} />
            </main>
        </>
    )
}