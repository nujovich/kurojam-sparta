const express = require("express");
const path = require("node:path");
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

const port = process.env.PORT ?? 3000;

// Ruta a la carpeta de compilación de Vite
const buildPath = path.resolve(__dirname, "../client/");

app.use(express.static(buildPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "pong",
  });
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`KuroJam Sparta Server is running on port ${port}`);
});
