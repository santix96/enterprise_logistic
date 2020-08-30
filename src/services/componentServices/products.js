let url = 'http://localhost:4000/products/'

const getProducts = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getProduct = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createProduct = async (target) => {
  const product = {
    name: target[1].value,
    provider: target[2].value,
    buyPrice: target[3].value,
    weigh: target[4].value,
    weighUnit: target[5].value
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(product),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteProduct = async (item) => {
   fetch(url + item._id, {
    method: 'DELETE',
    body: JSON.stringify(item),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
  .catch(error => console.error('Error:', error))
  .then(res => res.text()) // or res.json()
  .then(res => console.log("Product deleted..", res))
}

const updateProduct = (target) => {
  const product = {
    _id: target[0].value,
    name: target[1].value,
    provider: target[2].value,
    buyPrice: target[3].value,
    weigh: target[4].value,
    weighUnit: target[5].value,
  }
  fetch(url+product._id, {
     method: "PUT",
     body: JSON.stringify(product),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
}
