import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contextapi/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="Input your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone Number</span>
              </label>
              <input type="number" placeholder="Input your phone number" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="Input your email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="Input your password" className="input input-bordered" />
              <label className="label">
                <Link to ='/login' className="label-text-alt link link-hover">Already have an account? login here</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;