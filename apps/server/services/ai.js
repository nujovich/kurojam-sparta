const { OpenAI } = require("openai");

const openai = new OpenAI();

const generateImage = async (prompt) => {
  if (!prompt.trim()) {
    throw new Error("Prompt is required");
  }
  return openai.images.generate({
    prompt,
  });
};

module.exports = {
  generateImage,
};
