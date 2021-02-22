var express = require("express");
var router = express.Router();
var controller = require('../controller/house.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/:id', controller.GetHouseByID);

router.get('/image/:id', controller.GetImageById);

module.exports = router;
