import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUserAsync, selectCurrentUser } from "../slice/Auth/authSlice";
import { addAddressAsync } from "../slice/Address/addressSlice";

function AddAddressPage() {
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [line1, setLine1] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleAddAddress = (e) => {
    e.preventDefault();
    const address = { country, firstName, lastName, line1, landmark, city, state, pincode, mobile };
    dispatch(addAddressAsync(address));
    dispatch(fetchCurrentUserAsync())

    setShowSuccessMessage(true);
    setCountry('');
    setFirstName('');
    setLastName('');
    setLine1('');
    setLandmark('');
    setCity('');
    setState('');
    setPincode('');
    setMobile('');

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="m-10 md:w-[75%] lg:w-1/2 border-2 rounded-md">
        <div className="bg-black text-white rounded-md p-3 text-xl">Address</div>
        {showSuccessMessage && (
          <div className="fixed bottom-10 mb-10 right-5 bg-green-500 text-white p-2 rounded-md transition-transform transform translate-y-full ease-out duration-300 z-50">
            Address added successfully!
          </div>
        )}
        <form className="w-full p-2" onSubmit={handleAddAddress}>
          <input
            type="email"
            placeholder="Email"
            value={user?.email || ''}
            readOnly
            className="mt-3 py-3 px-2 w-full border rounded"
          />
          <h1 className="text-start mt-5 text-xl font-medium">Delivery</h1>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded"
          />
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            value={line1}
            onChange={(e) => setLine1(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc."
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded"
          />
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <input
              type="text"
              placeholder="PIN code"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded"
          />
          <button type="submit" className="w-full text-white bg-blue-600 hover:opacity-80 rounded mt-8 p-3">
            Add address
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAddressPage;
