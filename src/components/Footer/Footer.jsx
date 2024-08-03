import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full h-[70vh] font-["UntitledTTF"]'>
      <div className="w-full p-20 grid sm:grid-cols-12 ">
        <div className="flex flex-col gap-4 col-span-6 items-start">
          <h1 className="uppercase text-lg">Newsletter</h1>
          <p>Subscribe for store updates and discounts.</p>
          <input
            type="email"
            id="email"
            className="w-3/4 mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />
          <h2>WRITE TO US</h2>
          <p>support@siienoi.com</p>
          <h2>MON - FRI | 10:00 AM - 6:00 PM (IST)</h2>
        </div>
        <div className="flex flex-col col-span-3 items-start text-sm">
          <h1 className="text-lg">ABOUT Siienoi</h1>
          <div className="mt-4 -tracking-tight flex flex-col items-start gap-2">
          <h5>ABOUT US</h5>
          <h5>CONTACT US</h5>
          <h5>STORE LOCATOR</h5>
          <h5>CAREERS</h5>
          <h5>SIZE GUIDE</h5>
          <h5>PRESS</h5>
          <h5>LOOKBOOKS</h5>
          </div>
          
        </div>
        <div className="flex flex-col col-span-3 items-start text-sm">
          <h1 className="text-lg">POLICIES</h1>
          <div className="mt-4 -tracking-tight flex flex-col items-start gap-2">
          <h4>EXCHANGE & RETURNS</h4>
          <h4>PRODUCT DISCLAIMER</h4>
          <h4>SHIPPING POLICY</h4>
          <h4>TERMS OF USE</h4>
          <h4>PRIVACY POLICY</h4>
          <h4>GIFT CARD</h4>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="border border-t-[1px] mx-20"></div>
        <div className="w-full leading-none px-20 mt-10 flex justify-start gap-5 border-gray-500">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className="w-full pl-20 flex justify-start">
          <p className="text-gray-500 border-none">
            Copyright © 2024, Ajitpal Chauhan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
