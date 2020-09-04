let url = 'http://localhost:4000/zones/'

const getZones = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getZone = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const createZone = async (target) => {
  const zone = {
    name: target[1].value
  }

   fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(zone),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .catch(error => console.error('Error:', error))
  .then(response => response.json())
}

const deleteZone = async (item) => {
  if (window.confirm('¿Esta seguro que desea eliminar esta zona?')) {
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

const updateZone = (target) => {
  const zone = {
    _id: target[0].value,
    name: target[1].value,
  }
  fetch(url+zone._id, {
     method: "PUT",
     body: JSON.stringify(zone),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getZones,
  getZone,
  createZone,
  deleteZone,
  updateZone
}
