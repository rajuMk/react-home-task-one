import React from 'react';
import './MovieTile.css'


const MovieTile = (props) => {
    
    return (
        <>
            <div className="MovieTileMain">
                <img src={props.poster_path} alt="No Movie found"></img>
                <label>movie title is: <span>{props.title} <br/></span> movie run time is <span>{props.runtime}</span> sec </label>
            </div>
        </>
    )
}

export default MovieTile;