//Load the 'user' mongoose model.
const userModel = require("../models/user.model");
//Loads npm module "bcrypt".
//A library to help you hash passwords.
const bcrypt = require("bcrypt");

/*This part of the code handles the endpoint /.
 */
exports.index = async (req, res) => {
  try {
    res.status(200).send("Hello World.");
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};
/*This part of the code handle user registration.
it takes the user's unique username and password.
handles: post url/registration
 */
exports.registration = async (req, res) => {
  let newUser = new userModel(req.body);
  try {
    //Save user and redirect them to their chat page.
    await newUser.save();
    req.session.username = req.body.username;
    res.status(302).redirect("/chat");
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

/*This part of the code handle user login.
it takes the user's unique username and password.
handles: post url/login
 */
exports.login = async (req, res) => {
  let user = await userModel.findOne({ username: req.body.username });
  try {
    //Check if the user does not exist.
    if (user === null) {
      //Log Errors.
      res.status(400).send("Unable to login");
    } else {
      //Compare the password that the user entered to the hash password.
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.username = user.username;
        res.status(302).redirect("/chat");
      } else {
        //Log Errors.
        res.status(400).send("Unable to login");
      }
    }
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};

/*This part of the code handle user logout.
handles: post url/logout
 */
exports.logout = async (req, res) => {
  try {
    //Terminate the user's session.
    req.session.destroy((e) => {
      res.status(302).redirect("/");
    });
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};
