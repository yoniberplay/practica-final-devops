const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hola, soy Yoniber Encarnacion y este es mi proyecto final de electica 2."
  );
});

const server = app.listen(57675, () => {
  console.log(`Servidor online --> http://localhost:57675`);
});

app.close = (callback) => {
  server.close(callback);
};

module.exports = app;
