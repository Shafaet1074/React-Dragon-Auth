import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

  const {createUser} =useContext(AuthContext);


  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form= new FormData(e.currentTarget)
    const email=form.get('email');
    const password=form.get('password');
    const photo=form.get('photo');
    const displayName=form.get('name');

    
    console.log(email,password,photo,displayName);
    createUser(email,password,displayName)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{

      console.log(error);
    })  
  
  
  
  }



  return (
    <div>
      <Navbar></Navbar>
     <div>
     <h2 className="text-2xl text-center font-bold text-violet-600">Register</h2>
      <form  onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" name="name"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo"  />
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
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-xl font-medium text-center mt-4">Already have an Account <Link className="text-green-400 font-bold text-2xl"  to='/login'>Log In</Link></p>

     </div>
    </div>
  );
};

export default Register;