import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Registration } from "../components/Registration";
import { User } from "../model/User";
import { authHeader } from "../helpers/auth-header";

import createBrowserHistory from "../helpers/history";
import { Redirect } from "react-router";

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    localStorage.clear();
    let user = JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        {createBrowserHistory.push("/")} hello {window.location.reload()}
      </div>
    );
  }
}
export default Logout;
