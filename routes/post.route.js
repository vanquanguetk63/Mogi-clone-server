var express = require("express");
var router = express.Router();
var controller = require('../controller/post.controller');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });


/**
 * Lay id moi
 */
router.get('/id', controller.GetNewId);

router.post('', jsonParser, controller.PostToServer);

router.post('/image', jsonParser, controller.PostImg);

module.exports = router;
