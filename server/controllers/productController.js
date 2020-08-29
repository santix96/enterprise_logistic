import models from '../models';

let ProductController = {
  GetAll: async (req, res) => {
    var products = await models.Product.find({});
    res.json(products)
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
    /* Consultar provider por name para obtener el id */
    const provider = await models.Provider.findOne({name: req.body.provider}).exec();

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
    });
  },
  Delete: async (req, res) => {
    console.log("BODY ON DELETE", req.body);
    /* Validar si existe en la BD algun producto con ese id sino capturar error. */
    await models.Product.deleteOne({_id: req.body._id})
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

module.exports = ProductController;
