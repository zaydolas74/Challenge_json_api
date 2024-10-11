const Message = require("../../../models/Messages");

const getAll = async function (req, res) {
  const messages = await Message.find();

  res.json({
    status: "success",
    message: "GETTING messages",
    data: {
      messages: messages,
    },
  });
};

const create = async function (req, res, next) {
  let message = new Message({
    user: req.body.user,
    message: req.body.message,
  });

  const savedMessage = await message.save();

  res.json({
    status: "success",
    message: "Message created",
    data: {
      message: savedMessage,
    },
  });

  if (req.body.user === "error") {
    return next(new Error("This is a fake error"));
  }
};

module.exports.getAll = getAll;
module.exports.create = create;
