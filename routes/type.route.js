var express = require("express");
var router = express.Router();
var controller = require("../controller/type.controller");

/**
 * Lấy dữ liệu purpose.
 */
router.get("/", controller.GetPurpose);

/**
 * Lấy dữ liệu theo purpose.
 */
router.get('/purpose/:idType', controller.GetByPurpose);

module.exports = router;
