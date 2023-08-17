const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from memes!",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: `Hello from memes! ${req.params.id}`,
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "Hello from post!",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: `Hello from delete! ${req.params.id}`,
  })
});

module.exports = router;
