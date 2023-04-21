import React, { useContext } from 'react';
import { AuthContext } from '../contextapi/AuthProvider';

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h2>Home of {user && <span>{user.displayName}</span> }</h2> 
    </div>
  );
};
export default Home;