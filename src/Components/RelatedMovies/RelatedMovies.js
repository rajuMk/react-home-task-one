import React, { Component } from 'react';
import RelatedGenre from '../RelatedGenre/RelatedGenre';

class RelatedMovies extends Component {
    state = {
        movies: [],
        filteredMovies: [],
        searchBy: "title",
        sortBy: "releaseDate"
    }

    componentDidMount() {
        fetch('https://reactjs-cdp.herokuapp.com/movies')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    movies: data.data,
                    filteredMovies: data.data
                });
                console.log(this.state.movies);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
            this.realtedMovieDis(this.props.relatedGenre);
    }

    realtedMovieDis(relGen){
        let filteredMovies = this.state.movies;
        filteredMovies = filteredMovies.filter((movie, index) => {
            return movie.genres.toString().toLowerCase().search(
                relGen[0].toLowerCase()) !== -1;
        });
        this.setState({ filteredMovies: filteredMovies })
    }


  render() {
    let relatedGenre = (
        <div className="Result">
            {this.state.filteredMovies.map((fm, index) =>
                <RelatedGenre
                    title={fm.title}
                    runtime={fm.runtime}
                    genre={fm.genres}
                    poster_path={fm.poster_path}
                    release_date={fm.release_date}
                    vote_average={fm.vote_average}
                    id={fm.id}
                />
            )}
        </div>
    );


    return (
        <>
        <div>
          <label>Related Movies Class</label>
          {relatedGenre}
        </div>
        </>
    )
  }
}

export default RelatedMovies;




// import React from 'react';
// import './RelatedMovies.css';


// const RelatedMovies = (props) => {
//     return (
//             <>
//                 <div>Related Movies</div>                
//             </>
      
//     )
// }

// export default RelatedMovies;