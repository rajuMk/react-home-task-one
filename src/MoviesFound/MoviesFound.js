import React from 'react';
import './MoviesFound.css'

const MoviesFound = (props) => {
    console.log(props);
    return(
        <>
            <div className="MoviesFoundMain">
                <span className="mr-2"><b>{props.numOfMovies}</b></span>
                <label> Movies Found</label>
            </div>
        </>
    )
}

export default MoviesFound;