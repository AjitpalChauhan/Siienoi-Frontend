import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from '../../assets/logo.png'

function Navbar() {
  const dispatch = useDispatch();
  
  return (
    <div className="w-full py-5">
      <div className=" px-10 flex align-middle justify-between items-center relative">
        <div className="search text-2xl">
          <span>
            <RiSearchLine />
          </span>
        </div>
        <div className="logo">
          <Link to='/'>
          <img
            src={logo}
            alt=""
            className="w-14"
          />
          </Link>
         
        </div>
        <div className="search text-2xl flex items-center justify-between gap-6">
          <button >
            <Link to='/user-profile'>
              <FaRegUser />
            </Link>
          </button>
          <Link to="/cart">
            <BsHandbag />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 uppercase">
      <h1 className='font-["UntitledTTF"] text-md font-light'>Home</h1>
        <Link to="/all-products">
          <h1 className='font-["UntitledTTF"] text-md font-light'>Shop All</h1>
        </Link>
        <h1 className='font-["UntitledTTF"] text-md font-light'>Trending</h1>
        <h1 className='font-["UntitledTTF"] text-md font-light'>About</h1>
        <h1 className='font-["UntitledTTF"] text-md font-light'>Contact us</h1>
      </div>
    </div>
  );
}

export default Navbar;
