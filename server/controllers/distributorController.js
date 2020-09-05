import models from '../models';

let DistributorController = {
  GetAll: async (req, res) => {
    var distributors = await models.Distributor.find({});
    res.json(distributors)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var distributor = await models.Distributor.findById(req.params.id);
    if (distributor) {
        res.status(200).json(distributor);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const distributor = new models.Distributor({
      name: req.body.name,
      address: req.body.address,
      user: req.body.user,
      zone: req.body.zone
    });

    /* insertar el modelo a la BD */
    await distributor.save()
    .then(data => {
      res.send(data);
      console.log("Distributor created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Distributor.deleteOne({_id: req.body._id})
    console.log("Distributor deleted ...")
  },
  Update: async (req, res) => {
    await models.Distributor.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedDistributor) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedDistributor)
      }
    );
    console.log("Distributor updated ...")
  }
}

module.exports = DistributorController;
