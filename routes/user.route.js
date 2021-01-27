var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/search', controller.getUserByPhone);

router.post('/signup', urlencodedParser,);

module.exports = router;
