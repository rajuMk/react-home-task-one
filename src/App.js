import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import EndPage from './EndPage/EndPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <EndPage></EndPage> */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Home" exact component={Home}></Route>
            <Route path="/EndPage/:id" exact component={EndPage}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
