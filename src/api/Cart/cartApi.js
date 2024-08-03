import axios from "../../config/config.js";


export const addToCart = async(product) => {
  try {
    const response = await axios.post('/cart/add-to-cart',product, {
      headers: { 'content-type': 'application/json' }
    });
    console.log("API data",response.data)
    return response.data;
  } catch (error) {
    throw error
  }
}

export const fetchCartItems = async(product) => {
  try {
    const response = await axios.get('/cart/user-Cart', {
      headers: { 'content-type': 'application/json' }
    });
    console.log("API data",response.data)
    return response.data;
  } catch (error) {
    throw error
  }
}
