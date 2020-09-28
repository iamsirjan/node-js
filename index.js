const express = require("express");
const movies = require("./route/movies");
const mongoose = require("mongoose");
const app = express();
const users = require("./route/users");

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("connected to db"))
  .catch((err) => console.error("could not be connected to db", err));

app.use(express.json());
app.use("/api/movies", movies);
app.use("/api/users", users);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
