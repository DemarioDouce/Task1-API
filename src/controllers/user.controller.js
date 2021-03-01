//Load the 'user' mongoose model.
const userModel = require("../models/user.model");
//Load bcrypt.
const bcrypt = require("bcrypt");

/*This part of the code handle user registration.
it takes the user's unique username and password.
 */
exports.registration = async (req, res) => {
  let newUser = new userModel(req.body);
  try {
    //Save user and return them
    await newUser.save();
    res.status(200).send(newUser);
  } catch (e) {
    //Log error if username name exist
    if (e.keyPattern.username === 1) {
      res.status(400).send("Sorry username is already taken.");
    } else {
      //Log errors.
      res.status(400).send(e);
    }
  }
};
