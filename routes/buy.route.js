var express = require("express");
var router = express.Router();
var controller = require('../controller/buy.controller');


router.get('', controller.GetToBuy);

module.exports = router;
