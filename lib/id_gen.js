let id = 0;

function generateId() {
  id += 1;
  return id;
}

module.exports = generateId;
