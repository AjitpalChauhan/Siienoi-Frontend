import React from "react";

function Models() {
  return (
    <div className="w-full h-screen py-20 font-['UntitledTTF'] ">
      <div className="">
        <h1 className='w-full text-2xl text-center uppercase'>
          Siienoi Stars
        </h1>
      </div>
      <div className="w-full h-auto px-20 mt-10 flex flex-col lg:flex-row gap-8 ">
        <div className="h-[90vh] lg:w-1/3 w-full relative bg-white flex-shrink-0">
          <div className="w-full h-[80%] bg-red-600">
            <img
              src="https://media.glamour.com/photos/640a2651172c1176dfed2c9d/1:1/w_1280,h_1280,c_limit/CURVE%20MODELS%20090323%20defaultGettyImages-1467330184.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full h-8 flex text-xs justify-between uppercase">
            <h2>Siienoi</h2>
            <h2>featured actress</h2>
          </div>
        </div>
        <div className="h-[90vh] lg:w-1/3 w-full relative bg-white flex-shrink-0">
          <div className="w-full h-[80%] bg-red-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopkuddb-4u28Ix2afwF9cCSVkD3ftq8WKpQ&s"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full h-8 flex text-xs justify-between uppercase">
            <h2>Siienoi</h2>
            <h2>featured actress</h2>
          </div>
        </div>
        <div className="h-[90vh] lg:w-1/3 w-full relative bg-white flex-shrink-0">
          <div className="w-full h-[80%] bg-red-600">
            <img
              src="https://trendhero.io/wp-content/uploads/2020/01/instamodel2.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full h-8 flex text-xs justify-between uppercase">
            <h2>Siienoi</h2>
            <h2>featured actress</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
