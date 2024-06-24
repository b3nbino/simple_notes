const express = require("express");
const morgan = require("morgan");
const Note = require("./lib/notes");
const { body, validationResult } = require("express-validator");

const app = express();
const host = "localhost";
const port = "3000";
let userNotes = [];

userNotes.push(new Note("Note A", "Hello"));
userNotes.push(new Note("Note B", "Howdy-Doo"));
userNotes.push(new Note("Note C", "Konichiwa"));

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", { userNotes });
});

app.get("/home/new", (req, res) => {
  res.render("new-note");
});

app.post(
  "/home",
  [
    body("noteTitle")
      .trim()
      .isLength({ min: 0 })
      .withMessage("Please include a note title.")
      .isLength({ max: 50 })
      .withMessage("Title cannot be greater than 50 characters."),
  ],
  (req, res, next) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("new-note", {
        errors: errors.array.map((message) => message.msg),
      });
    } else {
      //FIX-ME need body parsing middlewear to pass form contents into new note
      userNotes.push(new Note(req.body.noteTitle, req.body.noteContents));
      res.redirect("/home");
    }
  }
);

app.listen(port, host, () => {
  console.log("Listening on port 3000...");
});
