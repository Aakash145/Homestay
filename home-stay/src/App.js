import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Navigation Bar Imports
import NavBar from './components/NavBar';
import NavBarOwner from './components/NavBarOwner';
import NavBarUser from './components/NavBarUser';

// Global Imports
import HomePage from './components/HomePage';
import Homes from './components/Homes';
import Login from './components/Login';
import Registration from './components/Registration';

// User Components Import
import UserHomePage from '././components/UserHomePage';
import UserReservations from './components/UserReservations';

// Owner Component Import
import OwnerHomePage from './components/OwnerHomePage';
import OwnerAdList from './components/OwnerAdList';
import OwnerAdPost from './components/OwnerAdPost';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <NavBarOwner /> */}
      {/* <NavBarUser /> */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/homes' component={Homes} />
        <Route path='/UserReservations' component={UserReservations} />
        <Route path='/userHomePage' component={UserHomePage} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/ownerHomePage' component={OwnerHomePage} />
        <Route path='/ownerAdList' component={OwnerAdList} />
        <Route path='/ownerAdPost' component={OwnerAdPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
