import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header'
import Search from './Search/Search'
import MoviesFound from './MoviesFound/MoviesFound'
import FooterContainer from './FooterContainer/FooterContainer'
import SearchContainer from './SearchContainer/SearchContainer'
import SortContainer from './SortContainer/SortContainer'
import ResultContainer from './ResultContainer/ResultContainer'
import SearchBy from './SearchBy/SearchBy'
import SortBy from './SortBy/SortBy'
import MovieTile from './MovieTile/MovieTile';

class App extends Component{
  state = {
    movies: [],
    filteredMovies: []
  }
  componentDidMount(){
    fetch('https://reactjs-cdp.herokuapp.com/movies')
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies:data.data,
        filteredMovies:data.data
      });
    })
    .catch(error => {
      console.log('Looks like there was a problem: \n', error);
    }); 
  }

  filterList(serchString){
    let filteredMovies = this.state.movies;
    if(serchString.length>0){
    filteredMovies = filteredMovies.filter((movie, index) => {
      return movie.title.toLowerCase().search(
        serchString.toLowerCase()) !== -1;
    });
  }
    this.setState({filteredMovies: filteredMovies});
  
  }

onChangeHandler = (e) => {
  console.log(e.target.value);
  this.filterList(e.target.value)
}
  
  render(){
    
    let Movies = (
      <div>
        {this.state.filteredMovies.map( ( fm, index ) => {
          return <MovieTile
            title={fm.title}
            runtime={fm.runtime}
            poster_path = {fm.poster_path}/>
        } )}
      </div>
    );

  

    return (
      <div className="App">        
        <SearchContainer>
          <Header />
          <Search change={this.onChangeHandler}/>
          <SearchBy />
        </SearchContainer>
        <SortContainer>
          <MoviesFound />
          <SortBy />
        </SortContainer>
        <ResultContainer>
          {Movies}
        </ResultContainer>

        {/* <MovieTile Runtime={this.state.filteredMovies[0].runtime}  Title={this.state.filteredMovies[0].title}/> */}
        <FooterContainer movies={this.state.movies}/>
      </div>
    )
 }
}


export default App;
