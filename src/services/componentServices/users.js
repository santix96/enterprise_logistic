let url = 'http://localhost:4000/users/';

const getUsers = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getUserByEmail = async (email, password) => {
  let response = await fetch(url);
  let responseData = await response.json();

  return responseData;
};

const login = async (email, password) => {
  const user = {
    email: email,
    password: password
  }

  return fetch(url, {
    // Adding method type
    method: 'POST',
    // Adding body or contents to send
    body: JSON.stringify(user), // data can be `string` or {object}!
    // Adding headers to the request
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => {
    console.error("El usuario ingresado no se encunetra registrado en el sistema", error);
  })
  .then(response => {
    console.log('Success: ', response[0])
    return response[0];
  });

}

const createUser = async (target) => {
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

const deleteUser = async (item) => {
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
      .then(res => console.log("Product deleted..", res))
  } else {
    this.onCancel(item)
  }
}

const updateUser = (target) => {
  const product = {
    _id: target[0].value,
    name: target[1].value,
    provider: target[2].value,
    buyPrice: target[3].value,
    weigh: target[4].value,
    weighUnit: target[5].value,
  }
  fetch(url + product._id, {
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
  getUsers,
  getUserByEmail,
  login
}
