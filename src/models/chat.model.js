//Load the mongoose module and Schema object.
const mongoose = require("mongoose");
//Load badwords.
var Filter = require("bad-words");

//Schema setup.
const chatSchema = new mongoose.Schema({
  message: { type: String, required: true, trim: true },
  timestamps: true,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

//This is where you specify what you would like to return.
userSchema.methods.toJSON = function () {
  let chatProfile = this;
  let chatObject = chatProfile.toObject();

  //Delete what you do not want to return using the attributes.
  delete chatObject._id;
  delete chatObject.__v;
  return userObject;
};

//filter out the badwords before saving.
chatSchema.pre("save", async function (next) {
  let chat = this;
  var customFilter = new Filter({ placeHolder: "x" });

  if (chat.isModified("message")) {
    chat.message = customFilter.clean(chat.message);
  }

  next();
});

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;
