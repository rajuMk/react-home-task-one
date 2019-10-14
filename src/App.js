import React from 'react';
import './App.css';
import Header from './Header/Header'
import Search from './Search/Search'
import MoviesFound from './MoviesFound/MoviesFound'

function App() {
  return (
    <div className="App">
          <Header/>
          <Search/>
          <MoviesFound/>
    </div>
  );

}

export default App;
