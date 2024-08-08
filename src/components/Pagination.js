import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <p className="page-link" 
                        onClick={goToPrevPage} 
                        style={{cursor:'pointer'}}>
                        Previous
                    </p>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <p onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            style={{cursor:'pointer'}}>
                            
                            {pgNumber}
                        </p>
                    </li>
                ))}
                <li className="page-item">
                    <p className="page-link" 
                        onClick={goToNextPage}
                        style={{cursor:'pointer'}}>
                        Next
                    </p>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination