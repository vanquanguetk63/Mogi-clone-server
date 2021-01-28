var express = require('express');
var router = express.Router();
var controller = require('../controller/address.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/province', controller.GetByProvince);

router.get('/province/:id', controller.GetAddress);

module.exports = router;