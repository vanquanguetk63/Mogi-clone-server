var express = require("express");
var router = express.Router();
var controller = require('../controller/buy.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('', controller.GetToBuy);

router.get('/:number', controller.GetToBuyLimit);


router.post('/image', jsonParser, controller.GetImageById);

module.exports = router;
