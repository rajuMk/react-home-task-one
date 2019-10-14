import React from 'react';
import './Search.css'

const Search = () =>{
    return(
        <div className="searchMain container">
            <div>
                <input type="text" class="form-control"></input>
                <button class="btn btn-primary mt-1">SEARCH</button>
            </div>
            <div class="mt-3">
                <span class="ml-2">SEARCH BY</span>
                <button class="ml-2">TITLE</button>
                <button class="ml-2">GENRE</button>
            </div>
        </div>
    )
}

export default Search;