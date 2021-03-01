// Load the mongoose module and Schema object.
const mongoose = require("mongoose");
//Load bcrypt.
const bcrypt = require("bcrypt");

//Schema setup.
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
});

//This is where you specify what you would like to return.
userSchema.methods.toJSON = function () {
  let userProfile = this;
  let userObject = userProfile.toObject();

  //Delete what you do not want to return using the attributes.
  delete userObject._id;
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};

//hash the plain text password before saving.
userSchema.pre("save", async function (next) {
  let user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  next();
});

const user = mongoose.model("user", userSchema);

module.exports = user;
