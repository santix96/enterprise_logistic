let url = 'http://localhost:4000/conveyors/'

const getConveyors = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getConveyor = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createConveyor = async (target) => {
  const conveyor = {
    name: target[1].value,
    user: target[2].value,
    neighborhood: target[3].value,
    route: target[4].value,
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(conveyor),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteConveyor = async (item) => {
   fetch(url + item._id, {
    method: 'DELETE',
    body: JSON.stringify(item),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
  .catch(error => console.error('Error:', error))
  .then(res => res.text()) // or res.json()
  .then(res => console.log("Conveyor deleted..", res))
}

const updateConveyor = (target) => {
  const conveyor = {
    _id: target[0].value,
    name: target[1].value,
    user: target[2].value,
    neighborhood: target[3].value,
    route: target[4].value,
  }

  fetch(url+conveyor._id, {
     method: "PUT",
     body: JSON.stringify(conveyor),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getConveyors,
  getConveyor,
  createConveyor,
  deleteConveyor,
  updateConveyor
}
