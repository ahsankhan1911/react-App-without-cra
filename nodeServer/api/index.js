var express = require('express');
var app = express();
var router = express.Router();
var controller = require('./controller');



router.get('/getUsers', controller.getUsers);



module.exports = router;