import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterUserAsync, selectLoggedInUser } from "../slice/Auth/authSlice";

function SignupPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)

  const handleSubmit = () => {
    const user = {username, email, password}
    dispatch(fetchRegisterUserAsync(user))
};

  return (
    <>
    {user && <Navigate to="/" replace={true}></Navigate>}
     <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-1/3 h-auto p-8 ">
        <h1 className="text-xl mb-14 text-center -tracking-tighter">
          Create account
        </h1>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block text-gray-700">Email</label> */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded border-black"
            value={username}
            onChange={e=>setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block text-gray-700">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded border-black"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="password" className="block text-gray-700">Password</label> */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded border-black"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8 mb-4">
          <button 
          className="uppercase w-full bg-black rounded text-white py-3 transition-opacity duration-500 ease-in-out hover:opacity-70"
          onClick={handleSubmit}>
            Sign up
          </button>
        </div>
        <div>
          <Link className="mr-2">Already have an account? </Link>
          <Link to="/login" className="hover:underline ">
            Login
          </Link>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default SignupPage;
