// Import express
const express = require('express');
// Import users controller
const UserController = require('./../controllers/userController.js');
// Create express router
const router = express.Router();

router.get('/', UserController.GetAll)
router.get('/:id', UserController.Get)
// Export router
module.exports = router
