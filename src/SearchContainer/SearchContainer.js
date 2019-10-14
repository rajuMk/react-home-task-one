import React from 'react'
import './SearchContainer.css'

const SearchContainer = (props) => {
    return (
        <>
            <div className="SearContImg">
            {
                props.children
            }
            </div>
        </>
    )
}

export default SearchContainer;