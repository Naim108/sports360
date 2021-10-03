import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AllTeams from './components/AllTeams/AllTeams';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Found from './components/Found/Found';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/details/:teamId'>
            <TeamDetails></TeamDetails>
          </Route>
          <Route path='*'>
            <Found></Found>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
