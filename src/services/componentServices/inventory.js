let url = 'http://localhost:4000/inventory/'

const getInventory = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getById = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const addRegistry = async (target) => {
  const newProduct = {
    product: target[1].value,
    name: target[2].value,
    quantity: target[3].value,
    sellPrice: target[4].value,
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(newProduct),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteRegistry = async (item) => {
  if (window.confirm('¿Esta seguro que desea eliminar este registro?')) {
    fetch(url + item._id, {
      method: 'DELETE',
      body: JSON.stringify(item),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   })
   .catch(error => console.error('Error:', error))
   .then(res => res.text()) // or res.json()
   .then(res => console.log("Registry deleted..", res))
  } else {
    this.onCancel(item)
  }
}

const updateRegistry = (target) => {
  const updatedRegistry = {
    _id: target[0].value,
    product: target[1].value,
    name: target[2].value,
    quantity: target[3].value,
    sellPrice: target[4].value,
  }
  fetch(url+updatedRegistry._id, {
     method: "PUT",
     body: JSON.stringify(updatedRegistry),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}


export {
  getInventory,
  getById,
  addRegistry,
  deleteRegistry,
  updateRegistry
}
