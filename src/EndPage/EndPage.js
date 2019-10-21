import React, { Component } from 'react';
import MovieFDContainer from '../Containers/MovieFDContainer/MovieFDContainer';
import MovieInfo from '../Components/MovieInfo/MovieInfo';

class EndPage extends Component{    
      state = {
        FullDetails: []
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
      if(this.state.FullDetails > 0){
        MoviesInfo = (
        <div className="Result">
            {this.state.FullDetails.map((fd, index) =>
                <MovieInfo
                    title={fd.title}
                    runtime={fd.runtime}
                    vote_average={fd.vote_average}
                    tagline = {fd.tagline}
                    poster_path={fd.poster_path}
                    release_date={fd.release_date}
                    id={fd.id}
                />
            )}
        </div>
      );
    }
      
      return(
          // {MoviesFullDetails}
          <div>
            <MovieFDContainer>
              {MoviesInfo}
            </MovieFDContainer>
          </div>
          
        )
    }
}


export default EndPage;