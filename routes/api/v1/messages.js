const express = require("express");
const router = express.Router();

let messages = [
  { id: 0, user: "pikachu", message: "Wassup" },
  { id: 1, user: "Zayd", message: "Yoo hello" },
];

//GET1
router.get("/", function (req, res) {
  res.json({
    status: "success",
    message: "GETTING messages",
    data: {
      messages: messages,
    },
  });
});

//GET2 ID
router.get("/:id", function (req, res) {
  res.json({
    status: "success",
    message: `GETTING message with ID ${req.params.id}`,
    data: {
      message: messages[req.params.id],
    },
  });
});

//POST
router.post("/", function (req, res) {
  res.json({
    status: "success",
    message: "Message created",
    data: {
      message: {
        user: req.body.user,
        text: req.body.text,
      },
    },
  });
});

//PUT
router.put("/:id", function (req, res) {
  res.json({
    status: "succes",
    message: "Message updated",
    data: {
      user: "Pikachu",
      text: "Hi, i'm an updated message",
    },
  });
});

//DELETE
router.delete("/:id", function (req, res) {
  res.json({
    status: "success",
    message: `Message with ID ${req.params.id} deleted`,
    data: {
      _id: req.params.id,
    },
  });
});

//GET3 USER
router.get("/", function (req, res) {
  const messagesUser = messages.filter(
    (message) => message.user === req.query.user
  );

  res.json({
    status: "success",
    message: `Messages from user ${req.query.user}`,

    data: {
      messages: messagesUser,
    },
  });
});

module.exports = router;
