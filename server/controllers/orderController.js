import models from '../models';

let OrderController = {
  GetAll: async (req, res) => {
    var orders = await models.Order.find({});
    res.json(orders)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var order = await models.Order.findById(req.params.id);
    if (order) {
        res.status(200).json(order);
    } else {
        res.sendStatus(404);
    }
  },
  Create: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const order = new models.Order({
      distributor: req.body.distributor,
      route: req.body.route,
    });

    /* insertar el modelo a la BD */
    await order.save()
    .then(data => {
      res.send(data);
      console.log("Order created ...")
    });
  },
  Delete: async (req, res) => {
    await models.Order.deleteOne({_id: req.body._id})
    console.log("Order deleted ...")
  },
  Update: async (req, res) => {
    await models.Order.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedOrder) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedOrder)
      }
    );
    console.log("Order updated ...")
  }
}

module.exports = OrderController;
