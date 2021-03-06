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
import ListingDetails from "./components/ListingDetails";
import BookAppointment from "./components/BookAppointment";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <BrowserRouter>
      {user && user.role === "STUDENT" && <NavBarUser />}
      {user && user.role === "OWNER" && <NavBarOwner />}
      {(!user || user.loginStatus === false) && <NavBar />}
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
        <Route path="/listingDetails/:id" component={ListingDetails} />
        <Route path="/bookAppointment" component={BookAppointment} />
      </Switch>
    </BrowserRouter>
  );
}

//{!user && <NavBar />}

export default App;
