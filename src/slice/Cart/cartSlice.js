import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addToCart, fetchCartItems } from '../../api/Cart/cartApi'

const initialState = {
  cartItems: [],
  status: 'idle'
}

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart', 
  async( productData,{rejectWithValue}) => {
    try {
      const response = await addToCart(productData)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchCartItemsAsync = createAsyncThunk(
  'cart/fetchCartItems', 
  async( _,{rejectWithValue}) => {
    try {
      const response = await fetchCartItems()
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addToCartAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(addToCartAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.cartItems.push(action.payload);
    })
    .addCase(fetchCartItemsAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.cartItems = action.payload;
    })
  }
})

export const cartProducts = state => state.product.cartItems;

export default cartSlice.reducer