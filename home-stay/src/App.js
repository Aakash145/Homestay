import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import NavBarOwner from "./components/NavBarOwner";
import NavBarUser from "./components/NavBarUser";

import HomePage from "./components/HomePage";
import Homes from "./components/Homes";
// import User from './components/User';
// import Reservations from './components/Reservations';
import Login from "./components/Login";
import Registration from "./components/Registration";

// User Components Import
import UserHomePage from "././components/UserHomePage";
import UserReservations from "./components/UserReservations";

import OwnerHomePage from "./components/OwnerHomePage";
import OwnerAdPost from "./components/OwnerAdPost";
import OwnerViewUnits from "./components/OwnerViewUnits";
import { PrivateRoute } from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.role === "STUDENT") {
  }
  return (
    <BrowserRouter>
      {user && user.role === "STUDENT" && <NavBarUser />}
      {user && user.role === "OWNER" && <NavBarOwner />}
      {!user && <NavBar />}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/homes" component={Homes} />
        {/* <Route path='/reservations' component={Reservations} />
        <Route path='/user' component={User} /> */}
        <Route path="/UserReservations" component={UserReservations} />
        <Route path="/userHomePage" component={UserHomePage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/ownerHomePage" component={OwnerHomePage} />
        <Route path="/ownerViewUnits" component={OwnerViewUnits} />
        <Route path="/ownerAdPost" component={OwnerAdPost} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
