import axios from "../../config/config.js";

export const loginUser = async (user) => {
  try {
    const response = await axios.post('/users/login', user, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const registerUser = async (user) => {
  try {
    const response = await axios.post('/users/register', user, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const logoutUser = async () => {
  try {
    const response = await axios.post('/users/logout',{
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data.message
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const currentUser = async () => {
  try {
    const response = await axios.get('/users/current-user',{
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateUser = async (user) => {
  try {
    const response = await axios.patch('/users/update-user', user, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}