import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Settings from './Setting';
import Login from './login';
import Signup from './signup';

function App() {
  return (

    // BEM

    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>

        <Footer />
      </div>
    </ Router>

  );
}

export default App;