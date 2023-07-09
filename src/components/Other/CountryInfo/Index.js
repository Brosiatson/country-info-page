import { Link } from 'react-router-dom'

export function CountryInfo({countryData}) {

    const {name, nativeName, population, region, subregion, capital, topLevelDomain, flag, borders} = countryData

    const bordersList = borders ? borders.map(border => <Link to={`/country/${border}`}>{border}</Link>) : "No data"

    return (
        <div className="country">
            <img className='country__img' src={flag.img} alt={flag.alt}></img>
            <div className='country__info'>
                <h2 className='country__info--name'>{name}</h2>
                <ul className='country__info--list'>
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