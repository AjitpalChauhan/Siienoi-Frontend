import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/HomePage';
import AllProductsPage from '../pages/AllProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import UserProfilePage from '../pages/UserProfilePage';
import AddAddressPage from '../pages/AddAddressPage';
import ViewAddressPage from '../pages/ViewAddressPage';
import AllUserAddressPage from '../pages/AllUserAddressPage';
import Error404 from '../pages/404.jsx'


function CustomerRoutes() {
 
  const location = useLocation();
  

  // Only show Navigation component when not on the NotFound page
  const showNavigation = location.pathname !== "*";

  // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
return (
  <div>
  
  {showNavigation && <Header />}
   <Routes>
   {/* <Route path="/login" element={<LoginPage/>}></Route> 
   <Route path="/sign-up" element={<SignupPage />}></Route> */}

      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/admin" element={<AdminHome />}></Route> */}
      <Route path="/all-products" element={<AllProductsPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      {/* <Route path="/about" element={<About />}></Route> */}
      {/* <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route> */}
      {/* <Route path="/terms-condition" element={<TearmsCondition />}></Route> */}
      {/* <Route path="/contact" element={<Contact />}></Route> */}
      {/* <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route> */}
      <Route path="/product-details/:id" element={<ProductDetailPage />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
      <Route path="/user-profile" element={<UserProfilePage />}></Route>
      <Route path="/add-address" element={<AddAddressPage />}></Route>
      <Route path="/view-address/:id" element={<ViewAddressPage />}></Route>
      <Route path="/all-addresses" element={<AllUserAddressPage />}></Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer/>
    
  </div>
);
};

export default CustomerRoutes
