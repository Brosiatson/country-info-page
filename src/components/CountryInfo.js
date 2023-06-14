import '../css/CountryInfo.css' 

export function CountryInfo({countryData, setPickedCountry, setPrevPickedCountry, prevPickedCountry}) {
    const {name, nativeName, population, region, subregion, capital, topLevelDomain, flag, borders} = countryData

    function handleButtonBorder(border) {
        setPickedCountry(border)
        setPrevPickedCountry([...prevPickedCountry, name])
    }

    const bordersList = borders ? borders.map(border => <button onClick={() => handleButtonBorder(border)}>{border}</button>) : "No data"

    return (
        <div className="div-country-info">
            <img src={flag.img} alt={flag.alt}></img>
            <div>
                <h2>{name}</h2>
                <ul>
                    <li>Name: {name}</li>
                    <li>Native Name: {nativeName}</li>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Subregion: {subregion}</li>
                    <li>Capital: {capital ? capital.map(x => x) : "Doesn't Exist"}</li>
                    <li>Top Level Domain: {topLevelDomain}</li>
                    <li>Borders: {bordersList}</li>
                </ul>
            </div>
        </div>
    )
}