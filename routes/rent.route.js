var express = require("express");
var router = express.Router();
var controller = require('../controller/rent.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('', controller.GetToRent);

router.get('/:number', controller.GetToRentLimit);

router.post('/image', jsonParser, controller.GetImageById);

module.exports = router;
