let url = 'http://localhost:4000/distributors/'

const getDistributors = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getDistributor = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createDistributor = async (target) => {
  const distributor = {
    name: target[1].value,
    address: target[2].value,
    user: target[3].value,
    zone: target[4].value,
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(distributor),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteDistributor = async (item) => {
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

const updateDistributor = (target) => {
  const distributor = {
    _id: target[0].value,
    name: target[1].value,
    address: target[2].value,
    user: target[3].value,
    zone: target[4].value,
  }

  fetch(url+distributor._id, {
     method: "PUT",
     body: JSON.stringify(distributor),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getDistributors,
  getDistributor,
  createDistributor,
  deleteDistributor,
  updateDistributor
}
