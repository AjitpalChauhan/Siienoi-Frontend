import axios from "../../config/config.js";


export const fetchAllProducts = async() => {
  try {
    const response = await axios.get('/products/all-products');
    console.log("API data",response.data)
    return response.data;
  } catch (error) {
    throw error
  }
}


export const fetchProductDetails = async(_id) => {
  try {
    const response = await axios.get('/products/productDetails/'+_id);
    return response;
  } catch (error) {
    throw error
  }
}