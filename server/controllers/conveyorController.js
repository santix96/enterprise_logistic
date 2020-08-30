import models from '../models';

let ConveyorController = {
  GetAll: async (req, res) => {
    var conveyors = await models.Conveyor.find({});
    res.json(conveyors)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var conveyor = await models.Conveyor.findById(req.params.id);
    if (conveyor) {
        res.status(200).json(conveyor);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const route = new models.Conveyor({
      name: req.body.name,
      user: req.body.user,
      neighborhood: req.body.neighborhood,
      route: req.body.route,
    });

    /* insertar el modelo a la BD */
    await route.save()
    .then(data => {
      res.send(data);
      console.log("Conveyor created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Conveyor.deleteOne({_id: req.body._id})
    console.log("Conveyor deleted ...")
  },
  Update: async (req, res) => {
    await models.Conveyor.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedConveyor) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedConveyor)
      }
    );
    console.log("Conveyor updated ...")
  }
}

module.exports = ConveyorController;
