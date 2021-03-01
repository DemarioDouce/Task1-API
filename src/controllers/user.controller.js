//Load the 'user' mongoose model.
const userModel = require("../models/user.model");
//Load bcrypt.
const bcrypt = require("bcrypt");

//Display "Hello world".
exports.init = async (req, res) => {
  try {
    res.status(200).send("Hello world!");
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};
