import models from '../models';

let UserController = {
  ValidateUser: async (req, res) => {
    try {
      var user = await models.User.findById(req.user.id);
      res.json(user)
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ msg: "Server Error..." });
    }
    // res.send('There will be dragons, not posts.')

  }
}

module.exports = UserController;
