//Load express
const express = require("express");
//Load express.Router class to create modular, mountable route handlers.
const router = new express.Router();

//Load the 'chat' controller.
var chat = require("../controllers/chat.controller");

module.exports = router;
