import { useEffect, useState } from 'react'
import { CountriesElement } from './CountriesElement'
import { CountryInfo } from './CountryInfo'
import '../css/Main.css'

export function Main() {
    const [countriesData, setCountriesData] = useState()
    const [filteredCountriesData, setFilteredCountriesData] = useState([])
    const [pickedCountry, setPickedCountry] = useState(false)
    const [prevPickedCountry, setPrevPickedCountry] = useState([])
    const [pickedCountryData, setPickedCountryData] = useState()
    const [inputTextValue, setInputTextValue] = useState("")
    const [selectValue, setSelectValue] = useState(false)

    useEffect(() => {
        async function fetchApiCountries() {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const json = await res.json()
            const pickedValues = await json.map(x => {
                return {
                    name: x.name.common,
                    population: x.population,
                    region: x.region,
                    capital: x.capital,
                    flag: {
                        img: x.flags.png,
                        alt: x.flags.alt,
                    },
                }
            })
            setCountriesData(pickedValues)
            setFilteredCountriesData(pickedValues)
        }

        async function fetchApiCountry() {
            const res = await fetch(`https://restcountries.com/v3.1/name/${pickedCountry}`)
            const json = await res.json()
            const borders = await fetchApiCountryBorders(json[0].borders)
            const pickedValues = await json.map(x => {
                return {
                    name: x.name.common,
                    nativeName: x.altSpellings[1],
                    population: x.population,
                    region: x.region,
                    subregion: x.subregion,
                    capital: x.capital,
                    topLevelDomain: x.tld ? x.tld[0] : null,
                    flag: {
                        img: x.flags.png,
                        alt: x.flags.alt,
                    },
                    borders: borders,
                }
            })
            setPickedCountryData(pickedValues[0])
        }

        async function fetchApiCountryBorders(countries) {
            if(!countries) {return console.log("Not Found")}

            let string = ""
            countries.map(x => string = string + `${x},`)
            
            const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${string}`)
            const json = await res.json()
            return await json.map(x => x.name.common)
        }
    
        pickedCountry ? fetchApiCountry() : fetchApiCountries()
    }, [pickedCountry])

    function handleInputText(e) {
        const inputText = e.target.value.toUpperCase()
        setInputTextValue(inputText)
        setFilteredCountriesData(countriesData.filter(x => (inputText ? x.name.toUpperCase().includes(inputText) : true) && (selectValue ? x.region === selectValue : true)))
    }

    function handleButtonBack() {
        setPickedCountry(prevPickedCountry.slice(-1)[0])
        setPrevPickedCountry(prevPickedCountry.slice(0, -1))
    }

    function handleSelect(e) {
        const select = e.target.value
        setSelectValue(select)
        setFilteredCountriesData(countriesData.filter(x => (select ? x.region === select : true) && (inputTextValue ? x.name.toUpperCase().includes(inputTextValue) : true)))                        
    }

    const renderCountriesList = filteredCountriesData && !(filteredCountriesData.length === 0) ?
    filteredCountriesData.map(x => 
        <CountriesElement
            countryData={x} 
            setPickedCountry={setPickedCountry} 
            prevPickedCountry={prevPickedCountry} 
            setPrevPickedCountry={setPrevPickedCountry}
            setPickedCountryData={setPickedCountryData}
        />) :
    <p className='paragraph-not-found'>Not Found</p>

    return (
        <>
            { pickedCountry ?
                <>
                { pickedCountryData ? 
                    <main>
                        <button className='button-back' onClick={handleButtonBack}>Back</button>
                        <CountryInfo
                            countryData={pickedCountryData}
                            setPickedCountry={setPickedCountry}
                            setPrevPickedCountry={setPrevPickedCountry}
                            prevPickedCountry={prevPickedCountry}
                        />
                    </main> :
                    <div className='div-loading'>
                        <p>Loading Country Info</p>
                    </div>
                }
                </> :
                <main>
                    <div className='div-inputs'>
                        <input className='input-search' type='text' placeholder='Search Country' onChange={handleInputText}></input>
                        <select onChange={handleSelect}>
                            <option value="">All Regions</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia">Asia</option>
                            <option value="Americas">Americas</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Antarctic">Antarctic</option>
                            <option value="Africa">Africa</option>
                        </select>
                    </div>
                    <div className='div-countries-list'>{renderCountriesList}</div>
                </main>
            }
        </>
    )
}