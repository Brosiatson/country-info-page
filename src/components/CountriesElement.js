import '../css/CountriesElement.css'

export function CountriesElement({countryData, setPickedCountry, prevPickedCountry, setPrevPickedCountry, setPickedCountryData}) {
    const {name, flag, population, region, capital} = countryData

    function handleButtonPickCountry() {
        setPickedCountry(name)
        setPrevPickedCountry([...prevPickedCountry, false])
        setPickedCountryData(null)
    }

    const capitalList = capital ? capital.map(x => <p key={x}>{x}</p>) : <p>No data</p>

    return (
        <div key={name} className='div-countries-element'>
            <img src={flag.img} alt={flag.alt}></img>
            <div className='div-countries-element-info'>
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <span>Capital: {capitalList}</span>
                <button onClick={handleButtonPickCountry}>View more</button>
            </div>
        </div>
    )
}