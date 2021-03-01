//Load the 'chat' mongoose model.
const chatModel = require("../models/chat.model");

/*This part of the code handle the main chat page.
 */
exports.chat = async (req, res) => {
  try {
    res.status(200).send("My Chats");
  } catch (e) {
    //Log errors.
    res.status(400).send(e);
  }
};
