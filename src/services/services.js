
const getProducts = async () => {
  const url = 'http://localhost:4000/products/'

  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getProduct = async (id) => {
  const url = 'http://localhost:4000/products/'

  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
}

export { getProducts };
