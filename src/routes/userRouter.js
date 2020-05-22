const express = require('express');
const Router = express.Router();
const UsersController = require('../controllers/UsersController');
const validateMiddleware = require('../middlewares/validateMiddleware');

Router.get('/', function (req, res) {
    UsersController.getUser(req, res)
})

Router.get('/:id', function (req, res) {
    UsersController.getUserById(req, res)
})

Router.post('/', validateMiddleware, function (req, res) {
    UsersController.postNewUser(req, res)
})


module.exports = Router;