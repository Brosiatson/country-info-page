import { Link } from 'react-router-dom'

export function CountriesElement({countryData}) {
    const {name, flag, population, region, capital, cca3} = countryData

    const capitalList = capital ? capital.map(x => <p key={x}>{x}</p>) : <p>No data</p>

    return (
        <div key={name} className='countries-element'>
            <div className='countries-element__img' style={{backgroundImage: `url("${flag.img}")`}}></div>
            <div className='countries-element__info'>
                <h2 className='countries-element__info--name'>{name}</h2>
                <p className='countries-element__info--props'>Population: {population}</p>
                <p className='countries-element__info--props'>Region: {region}</p>
                <p className='countries-element__info--props'>Capital: {capitalList}</p>
                <Link className='countries-element__info--link' to={`country/${cca3}`}>View more</Link>
            </div>
        </div>
    )
}