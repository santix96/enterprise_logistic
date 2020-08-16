import models from '../models';

exports.productGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  var products = await models.Product.find({});
  res.json(products)
}
