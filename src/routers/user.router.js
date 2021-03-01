//Load express
const express = require("express");
//Load express.Router class to create modular, mountable route handlers.
const router = new express.Router();

//Load the 'user' controller.
var user = require("../controllers/user.controller");

//handle a get request made to /.
router.get("/", user.index);
//handle a post request made to /registration.
router.post("/registration", user.registration);
//handle a post request made to /login.
router.post("/login", user.login);

//handle a post request made to /logout.
router.post("/logout", user.logout);

module.exports = router;
