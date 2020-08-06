// Import json with list of users
const transportadores = require('./../data/rutas.json')
// Create controller for GET request to '/users/all'
exports.rutaGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(transportadores)
}