import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/Auth/authSlice.js';
import productReducer from '../slice/Product/productSlice.js'
import addressReducer from '../slice/Address/addressSlice.js'
import cartReducer from '../slice/Cart/cartSlice.js'


const store = configureStore({
  reducer: {
    auth: authReducer,
  product: productReducer,
  address: addressReducer,
  cart: cartReducer
  }
})

export { store };