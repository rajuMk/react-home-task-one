import React from 'react';
import './MovieTile.css'


const MovieTile = (props) => {
    
    return (
        <>
            <div className="MovieTileMain">
                <img src={props.poster_path} alt="No Movie found"></img>
                <label>movie title is: <span>{props.title} </span> </label>
                <label>movie run time is <span>{props.runtime} </span> Min </label>
                <label>Movie Genre: <span>{props.genre}</span></label>
            </div>
        </>
    )
}

export default MovieTile;