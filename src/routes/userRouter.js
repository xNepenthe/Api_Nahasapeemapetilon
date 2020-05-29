const express = require('express');
const Router = express.Router();
const UsersController = require('../controllers/UsersController');
const {validateGet, validatePost} = require('../middlewares/validateMiddleware');

Router.get('/', function (req, res) {
    UsersController.getUser(req, res);
})

Router.get('/:id', validateGet, function (req, res) {
    UsersController.getUserById(req, res);
})

Router.post('/', function (req, res) {
    console.log("entré aca.");
    UsersController.postNewUser(req, res);
})


module.exports = Router;