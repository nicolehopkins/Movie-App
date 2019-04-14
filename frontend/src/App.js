import React, { Component } from 'react';
import './styling/NavBar.css'
import { HashRouter, Route, Switch } from 'react-router-dom';


// Components
import NavBar from './components/Navbar';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' exact component={ NavBar} />
      </HashRouter>
    );
  }
}

export default App;
