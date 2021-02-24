var express = require("express");
var router = express.Router();
var controller = require('../controller/search.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post('', jsonParser, controller.Search);

module.exports = router;
