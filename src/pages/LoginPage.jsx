import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginUserAsync, selectLoggedInUser } from "../slice/Auth/authSlice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  const error = useSelector(state => state.auth.error)

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email, password}
    dispatch(fetchLoginUserAsync(user))
  };

  if (user) {
    return <Navigate to="/" replace />;
  }


  return (
    <>
      {/* {user && <Navigate to="/" replace={true}></Navigate>} */}
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-1/3 h-auto p-8 ">
          <h1 className="text-xl mb-14 text-center -tracking-tighter">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {/* <label htmlFor="email" className="block text-gray-700">Email</label> */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="password" className="block text-gray-700">Password</label> */}
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded border-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 mb-4">
              <button
                type="submit"
                className="uppercase w-full bg-black rounded text-white py-3 transition-opacity duration-500 ease-in-out hover:opacity-70"
              >
                Sign In
              </button>
            </div>
          </form>
          {error && <div className="text-red-500">{error.message}</div>}
          <div>
            <Link className="hover:underline ">Forgot your password?</Link>
            <span className="mx-4"> / </span>
            <Link to="/sign-up" className="hover:underline ">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
