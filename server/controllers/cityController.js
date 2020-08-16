import models from '../models';

let CityController = {
  GetAll: async (req, res) => {
    var cities = await models.City.find({});
    res.json(cities)
  }
}

module.exports = CityController;
