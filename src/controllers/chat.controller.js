//Load the 'chat' mongoose model.
const chatModel = require("../models/chat.model");

/*
This method is where all the chats of a user is found.
It find the various chats by using the .find({}) method
of mongoosejs.

handles: get url/chat
 */
exports.allChat = async (req, res) => {
  //Assign the return to the "chats" variable.
  let chats = await chatModel.find({
    //Find the chat of the particular user that post it.
    postedBy: req.session.username,
  });
  try {
    res.status(200).send(chats);
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};

/*
This method is where a single chat of a user is found.
It find the various chats by using the .findOne({}) method
of mongoosejs.
handles: get url/chat/:id
 */
exports.getSingleChat = async (req, res) => {
  //Assign the id params to the "chatId" variable.
  let chatId = req.params.id;
  //Assign the return to the "chat" variable.
  let chat = await chatModel.findOne({
    //Uses the "chatId" and the "req.session.username".
    //This will better narrow down the user that post the chat.
    _id: chatId,
    postedBy: req.session.username,
  });
  try {
    res.status(200).send(chat);
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};

/*
This method is where a single chat for a user is created.
It uses the .save() method of mongoosejs to add it to the database.
handles: post url/chat/create 
*/

exports.createChat = async (req, res) => {
  // Create a new instance of the "chatModel" with the data that the user "post".
  //It takes the users "session.username" to associate it with that particular user.
  let newChat = new chatModel({ ...req.body, postedBy: req.session.username });
  try {
    //Save chat and return it.
    await newChat.save();
    res.status(200).send(newChat);
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};

/*
This method is where a single chat for a user is updated.
It uses the .findOneAndUpdate() method of mongoosejs to add the update to the database.
handles: patch url/chat/update/:id
*/
exports.updateChat = async (req, res) => {
  //Stores the "id" of the chat the user wants to update.
  let chatId = req.params.id;

  try {
    let chat = await chatModel.findOneAndUpdate(
      //filter
      {
        _id: chatId,
        postedBy: req.session.username,
      },
      //update
      { message: req.body.message },
      //returnOriginal: false is equivalent to new: true
      //It returns the original when it updates
      { new: true }
    );

    res.status(200).send(chat);
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};

/*
This method is where a single chat for a user is deleted.
It uses the .findOneAndDelete() method of mongoosejs to delete the chat from the database.
handles: delete url/chat/delete/:id 
*/

exports.deleteChat = async (req, res) => {
  //Assign the "id" to the variable.
  let chatId = req.params.id;
  console.log(chatId);
  try {
    let findChat = await chatModel.findOneAndDelete({
      //Filter
      _id: chatId,
      postedBy: req.session.username,
    });
    //If it is does not exist return error.
    if (!findChat) {
      res.status(400).send("Sorry this chat was not found.");
    } else {
      res.send(findChat);
    }
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};
