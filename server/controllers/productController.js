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
  }
}

module.exports = ProductController;
