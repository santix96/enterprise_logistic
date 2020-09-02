import models from '../models';

let ZoneController = {
  GetAll: async (req, res) => {
    var products = await models.Zone.find({});
    res.json(products)
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
    const product = new models.Product({
      name: req.body.name,
      provider: provider.id,
      buyPrice: req.body.buyPrice,
      weigh: req.body.weigh,
      weighUnit: req.body.weighUnit,
    });

    /* insertar el modelo a la BD */
    await product.save()
    .then(data => {
      res.send(data);
      console.log("Product created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Product.deleteOne({_id: req.body._id})
    console.log("Product deleted ...")
  },
  Update: async (req, res) => {
    await models.Product.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedProduct) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedProduct)
      }
    );
    console.log("Product updated ...")
  }
}

module.exports = ZoneController;
