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
import OwnerHomePage from './components/OwnerHomePage';
import OwnerViewUnits from './components/OwnerViewUnits';

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
        <Route path='/ownerHomePage' component={OwnerHomePage} />
        <Route path='/ownerViewUnits' component={OwnerViewUnits} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
