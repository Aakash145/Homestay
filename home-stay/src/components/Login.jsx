import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <h3>Login</h3>
      <NavLink to='/registration'>Registration</NavLink>
    </div>
  );
};
  
export default Login;