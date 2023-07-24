import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            
            console.log(user);
            navigate(from, {replace: true})
            setError('');
            
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      };

    return (
        <div className="login-page min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">        
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
            <div className="form-control">
            <h2 className="text-3xl font-bold text-center text-[#ee5253] ">Login</h2>
            <p className="text-red-500 font-semibold">{error}</p>
              <label className="label">
                <span className="label-text text-[#ee5253]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ee5253]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn bg-[#1a2836] text-white" />
            </div>
            {/* <SocialLogin/> */}
            </form>
            <p>New to here? 
                <Link className="text-[#EA2027] font-semibold" to='/registration'> Please Register</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;