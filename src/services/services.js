import axios from 'axios';


const getRoutes = () => {
  ""
};

const getProducts = async () => {
  const url = 'http://localhost:4000/products/all'

  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

export { getProducts };
