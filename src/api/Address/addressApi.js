import axios from "../../config/config.js";

export const addAddress = async (address) => {
  try {
    const response = await axios.post('/address/add-address', address, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteAddress = async (_id) => {
  try {
    const response = await axios.delete('/address/delete-address/'+_id, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const fetchAddressById = async (_id) => {
  try {
    const response = await axios.get('/address/view-address/'+_id, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const fetchAllAddresses = async (_id) => {
  try {
    const response = await axios.get('/address/view-all-addresses', {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateAddress= async ({address, _id}) => {
  try {
    const response = await axios.put('/address/update-address/'+_id, address, {
      headers: { 'content-type': 'application/json' }
    }) 
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
