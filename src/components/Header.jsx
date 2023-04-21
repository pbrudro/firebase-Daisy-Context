import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contextapi/AuthProvider';

const Header = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch((error)=>console.log(error.message));
  }

  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to ='/' className="btn btn-ghost normal-case text-xl">Daconte</Link>
      <Link to ='/'><button className="btn btn-ghost normal-case text-xl">Home</button></Link>
      <Link to ='/register'><button className="btn btn-ghost normal-case text-xl">Register</button></Link>
      <Link to ='/login'><button className="btn btn-ghost normal-case text-xl">Login</button></Link>
      <Link to ='/orders'><button className="btn btn-ghost normal-case text-xl">Orders</button></Link>
      {
        user ?
        <>
        <span>{user.email}</span> 
        <button onClick={handleLogOut} className="btn btn-ghost normal-case">Sign Out</button> 
        </>
        :
        <Link to ='/register'><button className="btn btn-ghost normal-case text-xl">Register</button></Link>
      }
    </div>
  );
};

export default Header;