import React from 'react';
import './MovieInfo.css';
import {Link} from 'react-router-dom';

const MovieInfo = (props) => {
    
    return (
            <>
                <div>
                    <Link to='/Home'>
                        <button style={{float:'right'}}>Back to all Movies search</button>
                    </Link>                
                </div>
                <div className="MovieInfoMain">
                    {/* <div>Movie Info File</div> */}
                    <img src={props.poster_path} alt="No Movie found"></img>
                    <label>movie title is: <span>{props.title} </span> </label>
                    <label>movie run time is <span>{props.runtime} </span> Min </label>
                    <label>Movie vote average: <span>{props.vote_average}</span></label>
                    <label>Tag Line: <span>{props.tagline}</span></label>
                    <label>Movie release date: <span>{props.release_date}</span></label>
                    <label>Over View: <span>{props.release_date}</span></label>
                    <label>Movie Genre: <span>{props.genre}</span></label>
                </div>
                
            </>
      
    )
}

export default MovieInfo;