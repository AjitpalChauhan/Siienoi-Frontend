import React from 'react';

const addresses = [
  {
    country: "USA",
    firstName: "John",
    lastName: "Doe",
    line1: "123 Main St",
    landmark: "Near Central Park",
    city: "New York",
    state: "NY",
    pincode: "10001",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    user: "1"
  },
  {
    country: "Canada",
    firstName: "Jane",
    lastName: "Smith",
    line1: "456 Maple Ave",
    landmark: "Opposite Town Hall",
    city: "Toronto",
    state: "ON",
    pincode: "M5H 2N2",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    user: "2"
  },
  {
    country: "India",
    firstName: "Rahul",
    lastName: "Kumar",
    line1: "789 Gandhi Rd",
    landmark: "Next to the Post Office",
    city: "Mumbai",
    state: "MH",
    pincode: "400001",
    email: "rahul.kumar@example.com",
    phone: "998-877-6655",
    user: "3"
  },
  {
    country: "UK",
    firstName: "Emily",
    lastName: "Brown",
    line1: "101 Baker St",
    landmark: "Close to the Museum",
    city: "London",
    state: "LDN",
    pincode: "NW1 6XE",
    email: "emily.brown@example.com",
    phone: "445-667-8899",
    user: "4"
  },
  {
    country: "Australia",
    firstName: "David",
    lastName: "Johnson",
    line1: "202 Sydney Rd",
    landmark: "Near the Opera House",
    city: "Sydney",
    state: "NSW",
    pincode: "2000",
    email: "david.johnson@example.com",
    phone: "776-554-3322",
    user: "5"
  }
];



const AllUserAddressPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Addresses</h1>
      <div className=" w-full flex flex-col justify-center items-center gap-4 ">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="border border-gray-300 hover:border-blue-500 hover:scale-105 transition-transform ease-in-out p-4 rounded-lg shadow-md text-start w-[80%]"
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
            <div className='flex flex-col md:text-end leading-2'>
            <p className="mb-1"> <span className='font-semibold'>Phone:</span> {address.phone}</p>
            <p className="mb-1"> <span className='font-semibold'>Email:</span> {address.email}</p>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllUserAddressPage