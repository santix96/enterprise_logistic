import models from '../models';

let ProductController = {
  GetAll: async (req, res) => {
    var products = await models.Product.find({});
    res.json(products)
  }
}

module.exports = ProductController;
