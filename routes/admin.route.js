var express = require('express');
var router = express.Router();
var controller = require('../controller/admin.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('', controller.GetPostIsApproved);

router.get('/approve',  controller.GetPostIsNotApproved);

router.post('/approve', jsonParser, controller.UpdatePost);

router.post('/delete', jsonParser, controller.DeletePost);

module.exports = router;