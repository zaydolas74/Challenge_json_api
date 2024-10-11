const express = require("express");
const router = express.Router();
const messagesController = require("../../../controllers/api/v1/messages");

let messages = [
  { id: 1, user: "pikachu", message: "Wassup" },
  { id2: 2, user: "Zayd", message: "Yoo hello" },
];

//GET1
router.get("/", messagesController.getAll);

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
router.post("/", messagesController.create);

//PUT
router.put("/:id", function (req, res) {
  res.json({
    status: "succes",
    message: "PUT Message",
    data: {
      user: "Pikachu",
    },
  });
});

//DELETE
router.delete("/:id", function (req, res) {
  res.json({
    status: "success",
    message: `Message with ID ${req.params.id} deleted`,
    data: {
      message: {
        _id: req.params.id,
      },
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
