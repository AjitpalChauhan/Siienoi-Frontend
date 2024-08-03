import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currentUser, loginUser, logoutUser, registerUser, updateUser } from "../../api/Auth/authApi";

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null,
  isAuthenticated: false,
  currentUser: null
}

export const fetchLoginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (user, {rejectWithValue}) => {
    try {
      const response = await loginUser(user)
      console.log("main",response.data.user)
      return response.data.user
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchRegisterUserAsync = createAsyncThunk(
  'auth/registerUser',
  async (user, {rejectWithValue}) => {
    try {
      const response = await registerUser(user)
      return response.data.user
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchLogoutUserAsync = createAsyncThunk(
  'auth/logoutUser',
  async (_, {rejectWithValue}) => {
    try {
      const response = await logoutUser()
      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchCurrentUserAsync = createAsyncThunk(
  'auth/currentUser',
  async (user, {rejectWithValue}) => {
    try {
      const response = await currentUser(user)
      if (response.data) {
        return response.data;
      } else {
        return rejectWithValue('No user logged in');
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchUpdateUserAsync = createAsyncThunk(
  'auth/updateUser',
  async (user, {rejectWithValue}) => {
    try {
      const response = await updateUser(user)
      if (response.data) {
        return response.data;
      } else {
        return rejectWithValue('Could not update the profile');
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(fetchLoginUserAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchLoginUserAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.isAuthenticated = true;
      state.loggedInUser = action.payload;
    })
    .addCase(fetchRegisterUserAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchRegisterUserAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.isAuthenticated = true;
      state.loggedInUser = action.payload;
    })
    .addCase(fetchLogoutUserAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchLogoutUserAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.loggedInUser = null;
      state.isAuthenticated = false;
      state.currentUser = null;
    })
    .addCase(fetchCurrentUserAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCurrentUserAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    })
    .addCase(fetchCurrentUserAsync.rejected, (state, action) => {
      state.status = 'idle';
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = action.payload;
    })
    .addCase(fetchUpdateUserAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchUpdateUserAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    })
  }
})

export const selectLoggedInUser = (state) => state.auth.loggedInUser
export const Authenticated = (state) => state.auth.isAuthenticated
export const selectCurrentUser = (state) => state.auth.currentUser

export default authSlice.reducer