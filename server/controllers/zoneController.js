import models from '../models';

let ZoneController = {
  GetAll: async (req, res) => {
    var zone = await models.Zone.find({});
    res.json(zone)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var zone = await models.Zone.findById(req.params.id);
    if (zone) {
        res.status(200).json(zone);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const zone = new models.Zone({
      name: req.body.name,
    });

    /* insertar el modelo a la BD */
    await zone.save()
    .then(data => {
      res.send(data);
      console.log("Zone created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Zone.deleteOne({_id: req.body._id})
    console.log("Zone deleted ...")
  },
  Update: async (req, res) => {
    await models.Zone.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedZone) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedZone)
      }
    );
    console.log("Zone updated ...")
  }
}

module.exports = ZoneController;
