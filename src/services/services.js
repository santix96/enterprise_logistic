import axios from 'axios';

let productsUrl = 'http://localhost:4000/products/'
let routesUrl = 'http://localhost:4000/routes/'

const getProducts = async () => {
  let response = await fetch(productsUrl);
  let responseData = await response.json();
  return responseData;
};

const getProduct = async (id) => {
  let response = await fetch(productsUrl);
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

   fetch(productsUrl, {
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
   fetch(productsUrl + item._id, {
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
  fetch(productsUrl+product._id, {
     method: "PUT",
     body: JSON.stringify(product),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

const getRoutes = async () => {
  let response = await fetch(routesUrl);
  let responseData = await response.json();
  return responseData;
};

const getRoute = async (id) => {
  let response = await fetch(routesUrl);
  let responseData = await response.json();
  return responseData;
};

const createRoute = async (target) => {
  const route = {
    zone: target[1].value,
    type: target[2].value,
    label: target[3].value,
  }

   fetch(routesUrl, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(route),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteRoute = async (item) => {
   fetch(routesUrl + item._id, {
    method: 'DELETE',
    body: JSON.stringify(item),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
  .catch(error => console.error('Error:', error))
  .then(res => res.text()) // or res.json()
  .then(res => console.log("Route deleted..", res))
}

const updateRoute = (target) => {
  const route = {
    _id: target[0].value,
    zone: target[1].value,
    type: target[2].value,
    label: target[3].value,
  }
  fetch(routesUrl+route._id, {
     method: "PUT",
     body: JSON.stringify(route),
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
  updateProduct,
  getRoutes,
  getRoute,
  createRoute,
  updateRoute,
  deleteRoute
};
