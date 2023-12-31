const express = require("express");
const router = express.Router();
const controller = require("../controllers/memes");

router.post("/generate", controller.generate);
router.get("/trending", controller.trending);
router.get("/rate", controller.rate);
router.post("/:id/like", controller.like);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
