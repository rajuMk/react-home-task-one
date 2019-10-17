import React from 'react';
import './SortBy.css'

const SortBy = (props) =>{
    return(
        <>
            <div class="mt-3 sortByMain">
                <span class="ml-2">SORT BY</span>
                <button class="ml-2" onClick={props.click} value="releaseDate">Release date</button>
                <button class="ml-2" onClick={props.click} value="rating">Rating</button>
            </div>
        </>
    )
}

export default SortBy;