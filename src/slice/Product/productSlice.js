import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllProducts, fetchProductDetails } from '../../api/Product/productApi'

const initialState = {
  product: {},
  allProducts: [],
  status: 'idle'
}

export const fetchProductDetailsAsync = createAsyncThunk(
  'product/fetchProductDetails', 
  async( _id,{rejectWithValue}) => {
    try {
      const response = await fetchProductDetails(_id)
      return response.data.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProducts', 
  async(_,{rejectWithValue}) => {
    try {
      const response = await fetchAllProducts()
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductDetailsAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.product = action.payload;
    })
    .addCase(fetchAllProductAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.allProducts = action.payload;
    })
  }
})

export const selectAllProducts = state => state.product.allProducts;
export const selectedProduct = state => state.product.product;

export default productSlice.reducer