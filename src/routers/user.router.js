//Load express
const express = require("express");
//Load express.Router class to create modular, mountable route handlers.
const router = new express.Router();

//Load the 'user' controller.
var user = require("../controllers/user.controller");

//handle a get request made to /.
router.get("/", user.init);

module.exports = router;
