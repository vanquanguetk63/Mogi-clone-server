var express = require("express");
var router = express.Router();
var controller = require("../controller/user.controller");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/search", controller.GetUserByPhone);

router.post("/login", jsonParser, controller.Login);

router.post("/signup", jsonParser, controller.SignUp);

router.post('/0',jsonParser,  controller.GetNotApprovedPostByIDUser);

router.post('/1', jsonParser, controller.GetApprovedPostByIDUser);

router.post('/2', jsonParser,  controller.GetIsApprovingPostByIDUser);

router.post('/favorite', jsonParser,  controller.GetFavorite)

router.post('/add', jsonParser,  controller.SaveToFavorite)

router.post('/delete', jsonParser,  controller.DeleteFromFavorite)

router.post('/getfavorite', jsonParser,  controller.CheckIdIsFavorite)

router.post('/admin', jsonParser,  controller.LoginAdmin)

module.exports = router;
