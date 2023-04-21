import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to ='/' className="btn btn-ghost normal-case text-xl">Daconte</Link>
      <Link to ='/'><button className="btn btn-ghost normal-case text-xl">Home</button></Link>
      <Link to ='/register'><button className="btn btn-ghost normal-case text-xl">Register</button></Link>
      <Link to ='/login'><button className="btn btn-ghost normal-case text-xl">Login</button></Link>
    </div>
  );
};

export default Header;