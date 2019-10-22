import React, { Component } from 'react';
import MovieFDContainer from '../Containers/MovieFDContainer/MovieFDContainer';
import MovieInfo from '../Components/MovieInfo/MovieInfo';
import RelatedMovies from '../Components/RelatedMovies/RelatedMovies';

class EndPage extends Component{    
      state = {
        FullDetails: {}
      }

      componentDidMount(){
        // console.log('EndPage',this.props);
        let ID = this.props.match.params.id;
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${ID}`)
        .then(res => res.json())
        .then(data => {
          console.log("this is data", data);
          this.setState({
            FullDetails:data
          });
            console.log("this is state",this.state);
        })
        .catch(error => {
          console.log('Looks like there was a problem: \n', error);
        }); 
      }

    render(){
      let MoviesInfo
      if(this.state.FullDetails && Object.keys(this.state.FullDetails).length > 0){
        MoviesInfo = (
        <div className="Result">
            {
                <MovieInfo
                    title={this.state.FullDetails.title}
                    runtime={this.state.FullDetails.runtime}
                    vote_average={this.state.FullDetails.vote_average}
                    tagline = {this.state.FullDetails.tagline}
                    poster_path={this.state.FullDetails.poster_path}
                    release_date={this.state.FullDetails.release_date}
                    genres={this.state.FullDetails.genres}
                    id={this.state.FullDetails.id}
                />
            }
        </div>
      );
    }
      
      return(
          // {MoviesFullDetails}
          <div>
            <MovieFDContainer>
              {MoviesInfo}
              { (this.state.FullDetails.genres && this.state.FullDetails.genres.length > 0) ?
                <RelatedMovies relatedGenre={this.state.FullDetails.genres}></RelatedMovies> :
                null
              }
            </MovieFDContainer>
          </div>
          
        )
    }
}


export default EndPage;