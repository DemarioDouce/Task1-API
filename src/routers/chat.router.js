//Load express
const express = require("express");
//Load express.Router class to create modular, mountable route handlers.
const router = new express.Router();

//Load the 'chat' controller.
var chat = require("../controllers/chat.controller");

//handle a get request made to /chat.
router.get("/chat", chat.chat);
//handle a post request made to /chat/create.
router.post("/chat/create", chat.createChat);
//handle a patch request made to /chat/update/:id.
router.patch("/chat/update/:id", chat.updateChat);
//handle a delete request made to /chat/delete/:id.
router.delete("/chat/delete/:id", chat.deleteChat);

module.exports = router;
