import React from 'react';
import './RelatedGenre.css';


const RelatedGenre = (props) => {
    
    
    return (
            <>
                <div className="RelatedGenre">
                    <img src={props.poster_path} alt="No Movie found"></img>
                    <label>movie title is: {props.title} </label> 
                   <label> movie run time is {props.runtime} </label>
                     <label>Movie Genre: {props.genre}</label>
                     <label>Movie release date:{props.release_date}</label>
                     <label>Movie vote average:{props.vote_average}</label>
                </div>
            
            </>
      
    )
}

export default RelatedGenre;