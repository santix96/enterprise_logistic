import models from '../models';

let InventoryController = {
  GetAll: async (req, res) => {
    var inventory = await models.Inventory.find({});
    res.json(inventory)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var product = await models.Product.findById(req.params.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const registry = new models.Inventory({
      product: req.body.product,
      name: req.body.name,
      quantity: req.body.quantity,
      sellPrice: req.body.sellPrice
    });

    /* insertar el modelo a la BD */
    await registry.save()
    .then(data => {
      res.send(data);
      console.log("Registry created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Inventory.deleteOne({_id: req.body._id})
    console.log("Registry deleted ...")
  },
  Update: async (req, res) => {
    await models.Inventory.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedInventory) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedInventory)
      }
    );
    console.log("Registry updated ...")
  }
}

module.exports = InventoryController;
