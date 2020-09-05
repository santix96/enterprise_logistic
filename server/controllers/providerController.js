import models from '../models';

let ProviderController = {
  GetAll: async (req, res) => {
    var providers = await models.Provider.find({});
    res.json(providers)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var provider = await models.Provider.findById(req.params.id);
    if (provider) {
        res.status(200).json(provider);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const provider = new models.Provider({
      name: req.body.name,
      nit: req.body.nit,
      inCharge: req.body.inCharge,
      user: req.body.user,
    });

    /* insertar el modelo a la BD */
    await provider.save()
    .then(data => {
      res.send(data);
      console.log("Provider created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Provider.deleteOne({_id: req.body._id})
    console.log("Provider deleted ...")
  },
  Update: async (req, res) => {
    await models.Provider.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedProvider) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedProvider)
      }
    );
    console.log("Provider updated ...")
  }
}

module.exports = ProviderController;
