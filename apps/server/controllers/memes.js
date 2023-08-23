const Memes = require("../models/Memes");
const { generateImage } = require("../services/ai");
const { getUser } = require("../services/clerk");
const { ObjectId } = require("mongodb");

exports.getAll = async (req, res) => {
  const memes = await Memes.find();
  res.json(memes);
};

exports.getOne = async (req, res) => {
  const meme = await Memes.findById(req.params.id);
  res.json(meme);
};

exports.create = async (req, res) => {
  if (!req.body || !req.body.url || !req.body.prompt || !req.body.userId) {
    res.status(400).json({
      message: "Missing required fields",
    });
    return;
  }

  const meme = new Memes({
    _id: new ObjectId(),
    url: req.body.url,
    userId: req.body.userId,
    prompt: req.body.prompt,
  });

  await meme.save();
  res.status(201).json(meme);
};

exports.update = async (req, res) => {
  const meme = await Memes.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    url: req.body.url,
    caption: req.body.caption,
  });
  res.json(meme);
};

exports.delete = async (req, res) => {
  await Memes.findByIdAndDelete(req.params.id);
  res.json({
    message: "Meme deleted",
  });
};

exports.generate = async (req, res) => {
  const result = await generateImage(req.body.prompt);
  res.json(result);
};

exports.trending = async (req, res) => {
  const memes = await Memes.find().sort({ likes: -1 }).limit(100);
  res.json(memes);
};

exports.rate = async (req, res) => {
  const memes = await Memes.aggregate([{ $sample: { size: 1 } }]);
  const meme = memes.pop();

  const user = await getUser(meme.userId);
  meme.user = user;

  res.json(meme);
};

exports.like = async (req, res) => {
  const meme = await Memes.findById(req.params.id);
  meme.likes += 1;
  await meme.save();
  res.json(meme);
};
