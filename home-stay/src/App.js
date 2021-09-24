import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Homes from './components/Homes';
import User from './components/User';
import Reservations from './components/Reservations';
import Login from './components/Login';
import Registration from './components/Registration';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/homes' component={Homes} />
        <Route path='/reservations' component={Reservations} />
        <Route path='/user' component={User} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
