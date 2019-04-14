import React, { Component } from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';


// Components
import NavBar from './components/Navbar';
import Home from './components/Home';



class App extends Component {
  render() {
    return (
      < NavBar />
      // <HashRouter>
      //   <Route path='/' exact component={ NavBar} />
      //   <Switch>
      //     <Route path='/' exact component={ Home } />
      //   </Switch>
      // </HashRouter>
    );
  }
}

export default App;
