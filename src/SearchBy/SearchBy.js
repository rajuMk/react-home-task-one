import React from 'react'
import './SearchBy.css'

const SearchBy = (props) => {
    return (
        <>
            <div className="container searchByMain mt-3">
                <span class="ml-2">SEARCH BY</span>
                <button class="ml-2 btn btn-primary" onClick={props.click} value="title">TITLE</button>
                <button class="ml-2 btn btn-info" onClick={props.click} value="genre">GENRE</button>
            </div>
        </>
    )
}

export default SearchBy;