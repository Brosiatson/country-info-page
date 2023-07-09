import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../contexts/Context'

export function CountriesFilter() {
    const {countries: {countries}, filteredCountries: {setFilteredCountries}} = useContext(Context)

    const [inputTextValue, setInputTextValue] = useState("")
    const [inputSelectValue, setInputSelectValue] = useState("")

    useEffect(() => {
        setFilteredCountries(countries.filter(country =>
            (inputTextValue ? country.name.toUpperCase().includes(inputTextValue.toUpperCase()) : true) &&          
            (inputSelectValue ? country.region === inputSelectValue : true) 
        ))
    }, [inputTextValue, inputSelectValue])
    
    function handleInputText(e) {
        setInputTextValue(e.target.value)
    }

    function handleSelect(e) {
        setInputSelectValue(e.target.value)                  
    }

    return (
        <>  
            <form className='filter'>
                <input className='filter__input--text' type='text' placeholder='Search Country' value={inputTextValue} onChange={handleInputText}></input>
                <select className='filter__input--select' value={inputSelectValue} onChange={handleSelect}>
                    <option value="">All Regions</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                </select>
            </form>
        </>
    )
}