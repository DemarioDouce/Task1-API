//Load express
const express = require("express");
//Load express.Router class to create modular, mountable route handlers.
const router = new express.Router();

//Load the 'tweet' controller.
var tweet = require("../controllers/tweet.controller");
