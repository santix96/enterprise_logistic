import models from '../models';

let UserController = {
  GetAll: async (req, res) => {
    var users = await models.User.find({});
    res.json(users)
  },
  Get: async (req, res) => {
    /*  Validar ObjectId incorrectos que lleguen por param. */
    var user = await models.User.find({ email: req.params.email });
    if (user) {
        res.status(200).json(user);
    } else {
        res.sendStatus(404);
    }
  },
  Login: async (req, res) => {
    var user = await models.User.find({ email: req.body.email, passwordHash: req.body.password });
    console.log("USER ON CONTROLLER", user)
    if (user) {
      res.status(200).json(user);
    } else {
        res.sendStatus(404);
    }
  }
}

module.exports = UserController;
