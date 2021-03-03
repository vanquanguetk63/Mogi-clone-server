var express = require('express');
var router = express.Router();
var controller = require('../controller/auth.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post('/login', jsonParser, controller.login);

module.exports = router;