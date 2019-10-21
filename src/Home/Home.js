import React, { Component } from 'react';
import Header from '../Header/Header'
import Search from '../Search/Search'
import MoviesFound from '../MoviesFound/MoviesFound'
import FooterContainer from '../FooterContainer/FooterContainer'
import SearchContainer from '../SearchContainer/SearchContainer'
import SortContainer from '../SortContainer/SortContainer'
import ResultContainer from '../ResultContainer/ResultContainer'
import SearchBy from '../SearchBy/SearchBy'
import SortBy from '../SortBy/SortBy'
import MovieTile from '../MovieTile/MovieTile';
import { Redirect } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

class Home extends Component {

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
    }


    filterList(serchString) {
        let filteredMovies = this.state.movies;
        if (serchString.length > 0 && this.state.searchBy == "title") {
            filteredMovies = filteredMovies.filter((movie, index) => {
                return movie.title.toLowerCase().search(
                    serchString.toLowerCase()) !== -1;
            });
        } else if (serchString.length > 0 && this.state.searchBy == "genre") {
            filteredMovies = filteredMovies.filter((movie, index) => {
                return movie.genres.toString().toLowerCase().search(
                    serchString.toLowerCase()) !== -1;
            });
        }
        this.setState({ filteredMovies: filteredMovies })
        console.log(this.state.filteredMovies);
    }


    toggleSearchHandler = (event) => {
        let e = event.target.value;
        this.setState({ searchBy: e });
        //console.log(this.state.searchBy)
    }

    toggleSortHandler = (event) => {
        // console.log(event.target.value);
        let sortE = event.target.value;
        this.setState({ sortBy: event.target.value })
        // console.log(this.state.sortBy);
        this.sortByRequirment(sortE);
    }

    sortByRequirment(sortByButtonClick) {
        let arr = [];
        const compartFunction = (a, b, key) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        }
        if (sortByButtonClick === 'releaseDate') {
            arr = this.state.filteredMovies.sort((a, b) => compartFunction(a, b, 'release_date'));
        } else if (sortByButtonClick === 'rating') {
            arr = this.state.filteredMovies.sort((a, b) => compartFunction(a, b, 'vote_average'));
        }
        this.setState({
            filteredMovies: arr
        })
    }


    onChangeHandler = (e) => {
        console.log(e.target.value);
        this.filterList(e.target.value)
    }

    // onMovieTileClick = (id) => {
    //     let url = `/EndPage/${id}`;
    //     return <Redirect to={url}/>
    //     alert("movie tile clicked" + " " + id);
    // }

    render() {

        let Movies = (
            <div className="Result">
                {this.state.filteredMovies.map((fm, index) =>
                    <MovieTile
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
            <div className="App">

                <SearchContainer>
                    <Header />
                    <Search change={this.onChangeHandler} />
                    <SearchBy click={this.toggleSearchHandler}></SearchBy>
                </SearchContainer>
                <SortContainer>
                    <MoviesFound numOfMovies={this.state.filteredMovies.length}></MoviesFound>
                    <SortBy click={this.toggleSortHandler} />
                </SortContainer>
                <ResultContainer>
                    {Movies}
                </ResultContainer>
                {/* <MovieTile Runtime={this.state.filteredMovies[0].runtime}  Title={this.state.filteredMovies[0].title}/> */}
                <FooterContainer movies={this.state.movies} />
                {/* <MovieFDContainer></MovieFDContainer> */}
            </div>
        )
    }
}

export default Home;