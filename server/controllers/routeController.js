import models from '../models';

let RoutesController = {
  GetAll: async (req, res) => {
    var routes = await models.Route.find({});
    res.json(routes)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var route = await models.Route.findById(req.params.id);
    if (route) {
        res.status(200).json(route);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const route = new models.Route({
      zone: req.body.zone,
      type: req.body.type,
      label: req.body.label,
    });

    /* insertar el modelo a la BD */
    await route.save()
    .then(data => {
      res.send(data);
      console.log("Route created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Route.deleteOne({_id: req.body._id})
    console.log("Route deleted ...")
  },
  Update: async (req, res) => {
    await models.Route.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedRoute) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedRoute)
      }
    );
    console.log("Route updated ...")
  }
}

module.exports = RoutesController;

// Import json with list of users

// Create controller for GET request to '/users/all'
exports.routeGetAll = async (req, res) => {

}
