import models from '../models';
// Import json with list of users

// Create controller for GET request to '/users/all'
exports.routeGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  var routes = await models.Route.find({});
  res.json(routes)
}