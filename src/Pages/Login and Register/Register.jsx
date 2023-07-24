import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const jobRules = form.jobRules.value;
        const location = form.location.value;
        const password = form.password.value;
        console.log(name, email, password, location, jobRules);

        createUser(email, password)
        .then(result => {const loggedUser = result.user;
            console.log(loggedUser);
      
            updateUserProfile(
                name,
                email,
                jobRules,
                location,
            )
              // console.log(updateUserProfile)
              .then(() => {
                const saveUser = {
                  displayName: form.name.value,
                  email: form.email.value,
                  jobRules: form.jobRules.value,
                  location: form.location.value,                  
                };
                console.log(saveUser);
                fetch('https://study-monk-server.vercel.app/users',{
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId)
                     {
                    //   reset();
                      Swal.fire({
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, {replace: true})
                    }
                  });
                // console.log("profile updates");
              });
          });
        };
    return (
        <div className="login-page min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
       
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <form onSubmit={handleSignUp}>
            <div className="form-control">
            <h2 className="text-3xl font-bold text-center text-[#ee5253]">Registration</h2>
              <label className="label">
                <span className="label-text text-[#ee5253]">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ee5253]">Job Rules</span>
              </label>
              <input
                type="jobRules"
                placeholder="job Rule"
                name="jobRules"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ee5253]">Location</span>
              </label>
              <input
                type="location"
                placeholder="location"
                name="location"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ee5253]">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ee5253]">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt Link Link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-[#1a2836] text-white" type="submit" value="Sign Up" />
            </div>
            {/* <SocialLogin/> */}
            </form>
            <p>Already have an account? 
                <Link className="text-[#EA2027] font-semibold" to='/login'> Please login</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;