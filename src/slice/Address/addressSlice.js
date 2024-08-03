import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAddress, deleteAddress, fetchAddressById, fetchAllAddresses, updateAddress } from "../../api/Address/addressApi";

const initialState = {
address: null,
addresses: [],
status: 'idle',
error: null
}

export const addAddressAsync = createAsyncThunk(
  'address/addAddress',
  async (address, {rejectWithValue}) => {
    try {
      const response = await addAddress(address)
      console.log("main",response.data.user)
      return response.data.user
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchAllAddressesAsync = createAsyncThunk(
  'address/fetchAllAddresses',
  async (address, {rejectWithValue}) => {
    try {
      const response = await fetchAllAddresses(address)
      console.log("main",response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchAddressByIdAsync = createAsyncThunk(
  'address/fetchAddressById',
  async (_id, {rejectWithValue}) => {
    try {
      const response = await fetchAddressById(_id)
      console.log("main",response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const updateAddressAsync = createAsyncThunk(
  'address/updateAddress',
  async ({address, _id}, {rejectWithValue}) => {
    try {
      const response = await updateAddress({address, _id})
      console.log("main",response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const deleteAddressAsync = createAsyncThunk(
  'address/deleteAddress',
  async (_id, {rejectWithValue}) => {
    try {
      const response = await deleteAddress(_id)
      console.log("main",response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)


export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(addAddressAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(addAddressAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.address = action.payload;
    })
    .addCase(fetchAllAddressesAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAllAddressesAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.addresses = action.payload;
    })
    .addCase(fetchAddressByIdAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAddressByIdAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.address = action.payload;
    })
    .addCase(updateAddressAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(updateAddressAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.address = action.payload;
    })
    .addCase(deleteAddressAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(deleteAddressAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.address = null;
    })
  }
})

export const selectAddress = (state) => state.address.address
export const selectAllAddress = (state) => state.address.addresses

export default addressSlice.reducer