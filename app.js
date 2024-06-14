const express = require("express");
const morgan = require("morgan");
const Note = require("./lib/notes");

const app = express();
const host = "localhost";
const port = "3000";

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(port, host, () => {
  console.log("Listening on port 3000...");
});
