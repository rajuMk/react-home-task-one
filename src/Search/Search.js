import React from 'react';
import './Search.css'

const Search = (props) =>{
    return(
        <div className="container">
                <input type="text" class="form-control" onChange={(event)=>props.change(event)}></input>
                <button class="btn btn-success mt-1">SEARCH</button>
        </div>
    )
}

export default Search;