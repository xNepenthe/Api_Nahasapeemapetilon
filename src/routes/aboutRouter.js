const express = require('express');
const Router = express.Router();

Router.get('/', function (req, res) {
    res.send('About this page:');
    /*res.json(
        
    )*/
})

module.exports = Router;