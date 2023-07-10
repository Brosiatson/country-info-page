import { Link } from 'react-router-dom'

export function CountryInfo({countryData}) {
    const {name, nativeName, population, region, subregion, capital, topLevelDomain, flag, borders} = countryData

    const bordersList = borders ? borders.map(border => <li><Link className='country__info--link' to={`../../country/${border}`}>{border}</Link></li>) : "No Data"
    
    return (
        <div className="country">
            <img className='country__img' src={flag.img} alt={flag.alt}></img>
            <div className='country__info'>
                <h2 className='country__info--name'>{name}</h2>
                <ul className='country__info--list'>
                    <li>Name: {name}</li>
                    <li>Native Name: {Object.entries(nativeName).map((elem, index) => index < 1 && elem[1].common)}</li>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Subregion: {subregion}</li>
                    <li>Capital: {capital ? capital.map(x => x) : "No Data"}</li>
                    <li>Top Level Domain: {topLevelDomain[0]}</li>
                    <ul className='country__info--borders-list'>
                        <li>Borders: </li>
                        {bordersList}
                    </ul>
                </ul>
            </div>
        </div>
    )
}