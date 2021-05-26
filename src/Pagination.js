import React from 'react'

function Pagination({countriesPerPage, paginate, totalCountries}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a onClick={() => paginate(number)} className='page-link' href="!#">{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination