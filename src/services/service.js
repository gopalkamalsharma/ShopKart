import axios from "axios";

const API_URL = "https://6aeaed09ee39618d7bf78dda.mockapi.io/shopkart";


const getProducts = async () => {
  const response = await axios.get(
    `${API_URL}/products`
  );
  return response;
};


const getProductDetails = async () => {
  const response = await axios.get(`${API_URL}/productDetails`);
  return response;
};


export { getProducts, getProductDetails };