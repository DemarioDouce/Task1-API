//Load the mongoose module and Schema object.
const mongoose = require("mongoose");
//Load npm module "badwords".
//A javascript filter for badwords.
var Filter = require("bad-words");

//Schema setup.
const tweetSchema = new mongoose.Schema(
  {
    tweet: { type: String, required: true, trim: true },
    postedBy: {
      type: String,
      required: true,
      ref: "user",
    },
    like: {
      type: Number,
      required: false,
      default: 0,
    },
    unlike: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

//This is where you specify what you would like to return.
tweetSchema.methods.toJSON = function () {
  let tweetProfile = this;
  let tweetObject = tweetProfile.toObject();

  //Delete what you do not want to return using the attributes.
  delete tweetObject._id;
  delete tweetObject.__v;
  return tweetObject;
};

//filter out the badwords before saving.
tweetSchema.pre("save", async function (next) {
  let tweet = this;
  var customFilter = new Filter({ placeHolder: "x" });

  if (tweet.isModified("message")) {
    tweet.message = customFilter.clean(tweet.message);
  }

  next();
});

const tweet = mongoose.model("tweet", tweetSchema);

module.exports = tweet;
