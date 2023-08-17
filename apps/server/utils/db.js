const mongoose = require("mongoose");

exports.connectDatabase = (app) => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected.");
      app.emit("ready");
    })
    .catch((error) => console.log(`Error Connecting to DB: ${error}`));
};
