let url = 'http://localhost:4000/routes/'

const getRoutes = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getRoute = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createRoute = async (target) => {
  const route = {
    zone: target[1].value,
    type: target[2].value,
    label: target[3].value,
  }

   fetch(url, {
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
  if (window.confirm('¿Esta seguro que desea eliminar este producto?')) {
    fetch(url + item._id, {
      method: 'DELETE',
      body: JSON.stringify(item),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   })
   .catch(error => console.error('Error:', error))
   .then(res => res.text()) // or res.json()
   .then(res => console.log("Route deleted..", res))
  } else {
    this.onCancel(item)
  }
}

const updateRoute = (target) => {
  const route = {
    _id: target[0].value,
    zone: target[1].value,
    type: target[2].value,
    label: target[3].value,
  }
  fetch(url+route._id, {
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
  getRoutes,
  getRoute,
  createRoute,
  deleteRoute,
  updateRoute
}
