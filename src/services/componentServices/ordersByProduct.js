let url = 'http://localhost:4000/orders-by-product/'

const getOrdersByProduct = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

export {
  getOrdersByProduct
}
