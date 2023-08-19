const Memes = require("../models/Memes");
const { generateImage } = require("../services/ai");

exports.getAll = async (req, res) => {
  const memes = await Memes.find();
  res.json(memes);
};

exports.getOne = async (req, res) => {
  const meme = await Memes.findById(req.params.id);
  res.json(meme);
};

exports.create = async (req, res) => {
  const meme = new Memes({
    name: req.body.name,
    url: req.body.url,
    caption: req.body.caption,
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
