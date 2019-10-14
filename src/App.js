import React from 'react';
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


function App() {
  return (
    <div className="App">
      <SearchContainer>
        <Header />
        <Search />
        <SearchBy />
      </SearchContainer>
      <SortContainer>
        <MoviesFound />
        <SortBy />
      </SortContainer>
      <ResultContainer>
        
      </ResultContainer>
      <FooterContainer />
    </div>
  );

}

export default App;
