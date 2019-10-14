import React from 'react';
import './SortBy.css'

const SortBy = () =>{
    return(
        <>
            <div class="mt-3 sortByMain">
                <span class="ml-2">SEARCH BY</span>
                <button class="ml-2">TITLE</button>
                <button class="ml-2">GENRE</button>
            </div>
        </>
    )
}

export default SortBy;