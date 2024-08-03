import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddressAsync, fetchAddressByIdAsync, selectAddress, updateAddressAsync } from "../slice/Address/addressSlice";
import { selectCurrentUser } from "../slice/Auth/authSlice";

function ViewAddressPage() {

  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const address = useSelector(selectAddress);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [showUpdateMessage, setShowUpdateMessage] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [line1, setLine1] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    dispatch(fetchAddressByIdAsync(param.id));
  }, [dispatch, param.id]);

  useEffect(() => {
    if (address) {
      setCountry(address.country);
      setFirstName(address.firstName);
      setLastName(address.lastName);
      setLine1(address.line1);
      setLandmark(address.landmark);
      setCity(address.city);
      setState(address.state);
      setPincode(address.pincode);
      setMobile(address.mobile);
    }
  }, [address]);

  const handleSave = () => {
    const updatedAddress = {
      country,
      firstName,
      lastName,
      line1,
      landmark,
      city,
      state,
      pincode,
      mobile,
      email,
    };

    // Call your update address thunk
    dispatch(updateAddressAsync({ address: updatedAddress , _id: param.id,}))
      .unwrap() // Unwrap the promise to handle the result
      .then(() => {
        setIsEditMode(false); // Exit edit mode
      })
      .catch((error) => {
        console.error('Failed to update address: ', error);
      });

      setShowUpdateMessage(true);

      setTimeout(() => {
        setShowUpdateMessage(false);
      }, 3000);
      
      
  };

  const handleDelete = () => {
    // Call your delete address thunk
    dispatch(deleteAddressAsync(param.id))
      .unwrap() // Unwrap the promise to handle the result
      .then(() => {
        setTimeout(() => {
          navigate("/user-profile");
        }, 5000);
         // Navigate to the addresses list after deletion
      })
      .catch((error) => {
        console.error('Failed to delete address: ', error);
      });

      setShowDeleteMessage(true);
      setTimeout(() => {
        setShowDeleteMessage(false);
      }, 3000);
  };

  return (
    <div className="  flex justify-center items-center">
      <div className="m-10 md:w-[75%] lg:w-1/2 ">
        <div className="border-2 rounded-md">
          <div className="bg-black text-white rounded-md p-3 text-xl">
            Address
          </div>
          {showUpdateMessage && (
          <div className="fixed bottom-10 mb-10 right-5 bg-green-500 text-white p-2 rounded-md transition-transform transform translate-y-full ease-out duration-300 z-50">
            Address updated successfully!
          </div>
        )}
          {showDeleteMessage && (
          <div className="fixed bottom-10 mb-10 right-5 bg-red-500 text-white p-2 rounded-md transition-transform transform translate-y-full ease-out duration-300 z-50">
            Address deleted successfully!
          </div>
        )}
          <form className="w-full p-2 ">
            <input
              type="email"
              placeholder="Email"
              readOnly={!isEditMode}
              value={email}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <h1 className="text-start mt-5 text-xl font-medium">Delivery</h1>
            <input
              type="text"
              placeholder="Country/Region"
              readOnly={!isEditMode}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <div className="gap-3">
              <input
                type="text"
                placeholder="First name"
                readOnly={!isEditMode}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                readOnly={!isEditMode}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-3 py-3 px-2 w-full border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              readOnly={!isEditMode}
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc."
              readOnly={!isEditMode}
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
            <div className="gap-3">
              <input
                type="text"
                placeholder="City"
                readOnly={!isEditMode}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="State"
                readOnly={!isEditMode}
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="PIN code"
                readOnly={!isEditMode}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="mt-3 py-3 px-2 w-full border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              readOnly={!isEditMode}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-3 py-3 px-2 w-full border rounded"
            />
          </form>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <div onClick={(e) => setIsEditMode(!isEditMode)}>
              {isEditMode ? (
                <div className="flex gap-3">
                  <button onClick={handleSave} className="py-2 px-5 bg-green-600 text-white rounded-md">
                    Save
                  </button>
                  <button className="py-2 px-5 bg-blue-600 text-white rounded-md">
                    Cancel
                  </button>
                </div>
              ) : (
                <button className="py-2 px-5 bg-yellow-500 text-white rounded-md">
                  Edit
                </button>
              )}
            </div>
          </div>

          <div>
            <button onClick={handleDelete} className="py-2 px-5 bg-red-600 text-white rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAddressPage;
