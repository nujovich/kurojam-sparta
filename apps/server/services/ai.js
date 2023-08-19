const { OpenAI } = require("openai");

const generateImage = async (prompt) => {
  const openai = new OpenAI();
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
