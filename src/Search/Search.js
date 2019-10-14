import React from 'react';
import './Search.css'

const Search = () =>{
    return(
        <div className="container">
                <input type="text" class="form-control"></input>
                <button class="btn btn-success mt-1">SEARCH</button>
        </div>
    )
}

export default Search;