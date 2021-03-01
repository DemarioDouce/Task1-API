//Load mongoose.
const mongoose = require("mongoose");
//Load dotenv.
const { config } = require("dotenv");

//Invoking the dotenv config.
config();
const uri = process.env.DB_URI;
//Set up a connection with the database.
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected with database.");
  })
  .catch((error) => console.log(error.message));
