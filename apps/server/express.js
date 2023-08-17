const express = require("express");
const path = require("node:path");
const app = express();

const port = process.env.PORT ?? 3000;

// Ruta a la carpeta de compilación de Vite
const buildPath = path.resolve(__dirname, "../client/");

app.use(express.static(buildPath));

// Ruta predeterminada que sirve el archivo index.html
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`KuroJam Sparta Server is running on port ${port}`);
});
