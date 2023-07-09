import { Link } from 'react-router-dom'

export function CountriesElement({countryData}) {
    const {name, flag, population, region, capital} = countryData

    const capitalList = capital ? capital.map(x => <p key={x}>{x}</p>) : <p>No data</p>

    return (
        <div key={name} className='countries-element'>
            <img className='countries-element__img' src={flag.img} alt={flag.alt}></img>
            <div className='countries-element__info'>
                <h2 className='countries-element__info--name'>{name}</h2>
                <p className='countries-element__info--props'>Population: {population}</p>
                <p className='countries-element__info--props'>Region: {region}</p>
                <span className='countries-element__info--props'>Capital: {capitalList}</span>
                <Link to={`/country/${name}`}>View more</Link>
            </div>
        </div>
    )
}