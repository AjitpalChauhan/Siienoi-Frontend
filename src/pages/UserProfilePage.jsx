import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUserAsync, fetchLogoutUserAsync, fetchUpdateUserAsync, selectCurrentUser } from "../slice/Auth/authSlice";
import { Link } from "react-router-dom";
import { fetchAllAddressesAsync, selectAllAddress } from "../slice/Address/addressSlice";




function UserProfilePage() {

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const addresses = useSelector(selectAllAddress)

  useEffect( ()=> {
    dispatch(fetchAllAddressesAsync())
  }, [dispatch])

  const [username, setUsername] = useState(currentUser?.username || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [dob, setDob] = useState(currentUser?.dob || "");
  const [gender, setGender] = useState(currentUser?.gender || "");

  const handleLogout = () => {
    dispatch(fetchLogoutUserAsync())
  }

  const handleSubmit = () => {
    e.preventDefault()
    const user = {username, dob, gender}
    dispatch(fetchUpdateUserAsync(user))
  }

  return (
    <div>
      <div className="flex flex-col  mt-20">
        <div>
          <h1 className="-tracking-tighter font-semibold">My Account</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3>Welcome back, {username}</h3>
          <h3 className="relative group cursor-pointer">
           <button onClick={handleLogout}>Log out</button> 
            <span className="absolute left-0 bottom-0 w-full h-[1.2px]  transform group-hover:bg-black duration-300 ease-in-out"></span>
          </h3>
        </div>
      </div>

      {/* user details */}
      <div className="  flex justify-center items-center">
        <div className="m-10 md:w-[75%] lg:w-1/2 rounded-md">
          <form action="" className="w-full p-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              readOnly
              className="mt-3 py-3 px-2 w-full border rounded"
            />

            <input
              type="Date"
              placeholder="DOB"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />

<div className="flex mt-4">
  <label htmlFor="gender-male" className="mr-2">Male</label>
  <input
    type="radio"
    id="gender-male"
    name="gender"
    value="male"
    checked = {gender === 'male'}
    onChange={(e)=>setGender(e.target.value)}
    className="mx-2"
  />
</div>
<div className="flex mt-2">
  <label htmlFor="gender-female" className="mr-2">Female</label>
  <input
    type="radio"
    
    id="gender-female"
    name="gender"
    value="female"
    checked = {gender === 'female'}
    onChange={(e)=>setGender(e.target.value)}
    className="mx-2"
  />
</div>
<div className="flex mt-2">
  <label htmlFor="gender-other" className="mr-2">Other</label>
  <input
    type="radio"
    id="gender-other"
    name="gender"
    value="other"
    checked = {gender === 'other'}
    onChange={(e)=>setGender(e.target.value)}
    className="mx-2"
  />
</div>

<div className="text-end p-2">
            <button type="submit" className="relative group cursor-pointer">
              Save
              <span className="absolute left-0 bottom-0 w-full h-[1.2px]  transform group-hover:bg-black duration-300 ease-in-out"></span>
            </button>
          </div>
            
          </form>
         
        </div>
      </div>


      <div className=" flex flex-col justify-center items-center">
        <div className=" m-10 w-full md:w-[75%] lg:w-1/2 rounded-md">
          <h1 className="border-b-2"> My Addresses</h1>
          {addresses && addresses.map((address) => (
            <Link to={`/view-address/${address._id}`}>
             <div
            key={address._id}
            className="border border-gray-300  hover:scale-105 transition-transform ease-in-out rounded-lg text-start mt-4 w-full h-auto p-10 "
          >
            <div className='mb-3 border-b-2 '>
            <h2 className="text-xl font-semibold mb-2 text-start">
              {address.firstName} {address.lastName}
            </h2>
            </div>
           
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-start text-start leading-2 mb-3'>
            <p className="mb-1">{address.line1}</p>
            <p className="mb-1">{address.landmark}</p>
            <p className="mb-1">
              {address.city}, {address.state}, {address.pincode}
            </p>
            <p className="mb-1">{address.country}</p>
            </div>
            <div className='flex flex-col text-start md:text-end leading-2'>
            <p className="mb-1"> <span className='font-semibold'>Phone:</span> {address.phone}</p>
            <p className="mb-1"> <span className='font-semibold'>Email:</span> {address.email}</p>
            </div>
            </div>
            
          </div>
            </Link>
        ))}
          
        </div>
       
        
        <Link to='/add-address' className="border px-10 py-5 hover:border-2 hover:border-blue-400 hover:scale-105 transition-transform ease-in-out"> 
          <div className="text-2xl">+</div>
          <div className="text-sm">add address</div>
        </Link>
      </div>

      <div className=" flex justify-center items-center">
        <div className=" m-10 w-full md:w-[75%] lg:w-1/2 rounded-md">
          <h1 className="border-b-2">Order History</h1>
          {currentUser.orders && currentUser.orders.map(order => (
            <div className="w-full border h-auto mt-4  p-10 flex justify-between hover:scale-105 transition-transform ease-in-out">
            <div className="text-start">
              <h1>
                {" "}
                <span className="font-semibold">Order Number</span>: #{order.OrderNumber}
              </h1>
              <h1>Total Items: {order.TotalAmount}</h1>
              <h1>Total Amount: ${order.TotalItems}</h1>
              <h1>Date of order: {order.Date}</h1>
            </div>

            <div className=" ordersummary flex items-end justify-end ">
              <h1 className="relative group cursor-pointer">
                view details
                <span className="absolute left-0 bottom-0 w-full h-[1.2px]  transform group-hover:bg-black duration-300 ease-in-out"></span>
              </h1>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
