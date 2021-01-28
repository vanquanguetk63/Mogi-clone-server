var express = require("express");
var router = express.Router();
var controller = require("../controller/user.controller");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/search", controller.GetUserByPhone);

router.post("/login", jsonParser, controller.Login);

router.post("/signup", jsonParser, controller.SignUp);


module.exports = router;
