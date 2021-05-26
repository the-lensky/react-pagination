import React from 'react'

function Countries({countries, loading}) {

    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <ul className='list-group mb-2'>
            {countries.map((country, i) => (
                <li className="list-group-item">{country.name}
                    <img className='ml-2' style={{width: '30px'}} src={country.flag} alt="Flag"/>
                </li>
            ))}
        </ul>

    )
}

export default Countries