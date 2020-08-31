let url = 'http://localhost:4000/providers/'

const getProviders = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getProvider = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createProvider = async (target) => {
  const provider = {
    name: target[1].value,
    nit: target[2].value,
    inCharge: target[3].value,
    user: target[4].value,
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(provider),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteProvider = async (item) => {
   fetch(url + item._id, {
    method: 'DELETE',
    body: JSON.stringify(item),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
  .catch(error => console.error('Error:', error))
  .then(res => res.text()) // or res.json()
}

const updateProvider = (target) => {
  const provider = {
    _id: target[0].value,
    name: target[1].value,
    nit: target[2].value,
    inCharge: target[3].value,
    user: target[4].value,
  }
  fetch(url+provider._id, {
     method: "PUT",
     body: JSON.stringify(provider),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getProviders,
  getProvider,
  createProvider,
  deleteProvider,
  updateProvider
}
