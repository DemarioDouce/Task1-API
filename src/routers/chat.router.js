//Load express
const express = require("express");
//Load express.Router class to create modular, mountable route handlers.
const router = new express.Router();

//Load the 'chat' controller.
var chat = require("../controllers/chat.controller");

//handle a get request made to /chat.
router.get("/chat", chat.chat);

module.exports = router;
