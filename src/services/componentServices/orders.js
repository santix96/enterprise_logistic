let url = 'http://localhost:4000/orders/'
let zoneUrl = 'http://localhost:4000/zones/';
let neighborhoodUrl = 'http://localhost:4000/neighborhoods/';

const getOrders = async () => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getOrder = async (id) => {
  let response = await fetch(url);
  let responseData = await response.json();
  return responseData;
};

const getOrdersByRoute = async (zoneId) => {
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
  let orderResponse = await fetch(url);
  let orders = await orderResponse.json();

  /* Filtrar unicamente transportadores que esten en un barrio dentro de la zona ingresada */
  let resultOrders = [];
  orders.filter( (order) => {
    if (requiredNeighborhoods.includes(order.neighborhood) && order.state == 'Pendiente') {
      resultOrders.push(order);
    }
  })

  return resultOrders;
}

const assignRoutes = async (assignedRoutes) => {
  console.log("ORDERS ON SERVICES", assignedRoutes);
  assignedRoutes.map( (order) => {
    fetch(url+order._id, {
       method: "PUT",
       body: JSON.stringify(order),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     })
   .catch(error => console.error('Error:', error))
   .then(response => response.json())
  })
}

const createOrder = async (target) => {
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

const deleteOrder = async (item) => {
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

const updateOrder = (target) => {
  console.log("TARGET", target)
  const order = {
    _id: target[0].value,
    distributor: target[1].value,
    state: target[2].value,
    neighborhood: target[3].value,
    route: target[6].value,
  }

  fetch(url+order._id, {
     method: "PUT",
     body: JSON.stringify(order),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
 .catch(error => console.error('Error:', error))
 .then(response => response.json())
}

export {
  getOrders,
  getOrder,
  getOrdersByRoute,
  createOrder,
  deleteOrder,
  updateOrder,
  assignRoutes
}
