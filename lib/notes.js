let generateId = require("./id_gen");

class Note {
  constructor(name) {
    this.name = name;
    this.contents = "";
    this.id = generateId();
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
    Note.allNotes.push(this);
  }

  static allNotes = [];

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
    this.lastUpdated = new Date();
  }

  getContents() {
    return this.contents;
  }

  setContents(newContents) {
    this.contents = newContents;
    this.lastUpdated = new Date();
  }

  getCreationDate() {
    return this.dateCreated.toString();
  }

  getLastUpdated() {
    return this.lastUpdated.toString();
  }
}

module.exports = Note;
