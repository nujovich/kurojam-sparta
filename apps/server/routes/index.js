const express = require("express");
const router = express.Router();
const memesRouter = require("./memes");

router.use("/memes", memesRouter);

module.exports = router;
