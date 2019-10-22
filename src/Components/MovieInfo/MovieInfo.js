import React from 'react';
import './MovieInfo.css';
import { Link } from 'react-router-dom';

const MovieInfo = (props) => {
    let genres = props.genres.join(",")
    return (
        <>
            <div className="MovieInfoMain">
                {/* <div>Movie Info File</div> */}
                <img src={props.poster_path} alt="No Movie found"></img>
                <span> movie title is: <b>{props.title}</b> </span>
                <span> movie genre: <b>{genres}</b> </span>
                <span>Movie vote average:<b>{props.vote_average}</b> </span>
                <span>Tag Line:<b>{props.tagline}</b> </span>
                <span>Movie release date:<b>{props.release_date}</b> </span>
                {/* <span>Over View:<b>{props.release_date}</b> </span> */}
                <Link to='/Home'>
                    <button class="btn btn-success" style={{ float: 'right' }}>Back to all Movies search</button>
                </Link>
            </div>
        </>

    )
}

export default MovieInfo;