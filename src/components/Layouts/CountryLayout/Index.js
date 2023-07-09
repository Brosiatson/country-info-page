import { CountryInfo } from "../../Other/CountryInfo/Index"
import { Header } from "../../Other/Header/Index"

export function CountryLayout({data}) {
    return(
        <>
            <Header />
            <main>
                <CountryInfo countryData={data} />
            </main>
        </>
    )
}