//Load express.
const express = require("express");
//Load the db.
require("./db/mongo.db");
//Load dotenv.
const { config } = require("dotenv");
//Routers.
const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const tweetRouter = require("./routers/tweet.router");
//Load express-session
const session = require("express-session");

//Invoking the dotenv config.
config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

//Session config
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//User router.
app.use(userRouter);
//Chat router.
app.use(chatRouter);
//tweet router
app.use(tweetRouter);

module.exports = app.listen(port, () => {
  console.log("Server is up and running on port " + port + ".");
});
