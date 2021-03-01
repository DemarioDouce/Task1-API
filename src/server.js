//Load express.
const express = require("express");
//Load the db.
require("./db/mongo.db");
//Load dotenv.
const { config } = require("dotenv");
//Routers.
const userRouter = require("./routers/user.router");
//Invoking the dotenv config.
config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

//User router.
app.use(userRouter);
app.listen(port, () => {
  console.log("Server is up and running on port " + port + ".");
});
