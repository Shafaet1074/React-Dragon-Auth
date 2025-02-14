import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const {signIn}=useContext(AuthContext)
  const location =useLocation();
 const  navigate=useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form= new FormData(e.currentTarget)
    const email=form.get('email');
    const password=form.get('password');
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
      console.log(result.user);
      // Navigate after log in
      navigate(location?.state ? location.state : '/');

    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
      <Navbar></Navbar>
     <div>
     <h2 className="text-4xl text-center font-bold text-green-400 "> Log In</h2>
      <form  onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-green-400">Login</button>
        </div>
      </form>
      <p className="text-xl font-medium text-center mt-4">Don't Have an account <Link className="text-blue-600 font-bold"  to='/register'>Register</Link></p>

     </div>
    </div>
  );
};

export default Login;