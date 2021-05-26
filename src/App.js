import {useEffect, useState} from 'react'
import axios from 'axios'
import Countries from './Countries'
import Pagination from './Pagination'


function App() {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)


    useEffect(() => {
        const getCountries = async () => {
            setLoading(true)
            const response = await axios.get(`https://restcountries.eu/rest/v2/all`)
            setCountries(response.data)
            setLoading(false)
        }
        getCountries()
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev +1)
    const prevPage = () => setCurrentPage(prev => prev -1)


    return (
        <div className='container mt-5'>
            <h1 className="text-primary">Countries {countries.length}</h1>
            <Countries loading={loading} countries={currentCountry}/>
            <Pagination paginate={paginate} countriesPerPage={countriesPerPage} totalCountries={countries.length}/>
            <button onClick={prevPage}className="btn btn-primary">Prev</button>
            <button onClick={nextPage} className="btn btn-primary ms-2">Next</button>

        </div>
    )
}

export default App
