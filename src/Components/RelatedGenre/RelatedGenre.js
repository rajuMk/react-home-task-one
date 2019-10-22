import React from 'react';
import './RelatedGenre.css';


const RelatedGenre = (props) => {
    
    
    return (
            <>
                <div className="RelatedGenre">
                    <img src={props.poster_path} alt="No Movie found"></img>
                    <label>movie title is: <span>{props.title} </span> </label>
                    <label>movie run time is <span>{props.runtime} </span> Min </label>
                    <label>Movie Genre: <span>{props.genre}</span></label>
                    <label>Movie release date: <span>{props.release_date}</span></label>
                    <label>Movie vote average: <span>{props.vote_average}</span></label>
                </div>
            
            </>
      
    )
}

export default RelatedGenre;