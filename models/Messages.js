const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema({
  user: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
