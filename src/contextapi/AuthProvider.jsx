import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  

  const createUser = (email,Password) => createUserWithEmailAndPassword(auth,email,Password);
  
  const signIn = (email,Password) => signInWithEmailAndPassword(auth,email,Password);

  const authInfo = { 
    createUser,
    signIn
   }

  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;