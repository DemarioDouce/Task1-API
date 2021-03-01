//Load the 'chat' mongoose model.
const chatModel = require("../models/chat.model");

/*This part of the code handle the main chat page.
 */
exports.chat = async (req, res) => {
  let chats = await chatModel.find({ postedBy: req.session.username });
  try {
    res.status(200).send(chats);
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};

/*This part of the code handle the chat creation.
 */

exports.createChat = async (req, res) => {
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

exports.updateChat = async (req, res) => {
  let updateChat = await chatModel.findOneAndUpdate({});
  try {
    res.status(200).send("");
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};

exports.deleteChat = async (req, res) => {
  let chatId = req.params.id;
  console.log(chatId);
  try {
    let findChat = await chatModel.findOneAndDelete({
      _id: chatId,
    });
    if (!findChat) {
      res.status(400).send();
    } else {
      res.send(findChat);
    }
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};
