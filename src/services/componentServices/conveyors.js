let url = 'http://localhost:4000/conveyors/';
let zoneUrl = 'http://localhost:4000/zones/';
let neighborhoodUrl = 'http://localhost:4000/neighborhoods/';

const getConveyors = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getConveyorsByZone = async (zoneId) => {
  /* Obtener Zonas */
  let response = await fetch(zoneUrl);
  let zones = await response.json();
  let requiredZone;
  zones.map( (zone) => {
    if (zone._id == zoneId) {
      requiredZone = zone;
    }
  })

  /* Obtener barrios */
  let neighborhoodResponse = await fetch(neighborhoodUrl);
  let neighborhoods = await neighborhoodResponse.json();

  /* Filtrar unicamente barrios que esten en la zona ingresada */
  let requiredNeighborhoods = [];
  neighborhoods.map( (neighborhood) => {
    if (neighborhood.zone == zoneId) {
      requiredNeighborhoods.push(neighborhood._id);
    }
  })

  /* Obtener transportadores */
  let conveyorResponse = await fetch(url);
  let conveyors = await conveyorResponse.json();

  /* Filtrar unicamente transportadores que esten en un barrio dentro de la zona ingresada */
  let resultConveyors = [];
  conveyors.filter( (conveyor) => {
    if (requiredNeighborhoods.includes(conveyor.neighborhood)) {
      resultConveyors.push(conveyor);
    }
  })

  return resultConveyors;
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
   .then(res => console.log("Conveyor deleted..", res))
  } else {
    this.onCancel(item)
  }
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

const assignConveyor = (conveyor) => {
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
  updateConveyor,
  getConveyorsByZone,
  assignConveyor
}
