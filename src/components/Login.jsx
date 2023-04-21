import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contextapi/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email,password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    form.reset();
  })
  .catch((error) => {
    console.log(error.message); 
  });

  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center mb-4">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="text" placeholder="Input your email" className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="Input your password" className="input input-bordered" required/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <label className="label">
              <Link to ='/register' className="label-text-alt link link-hover">New to Daconte? Register now</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;