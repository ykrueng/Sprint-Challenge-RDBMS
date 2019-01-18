const db = require("../config/dbConfig");

module.exports = {
  insert: function (project) {
    return db("projects").insert(project);
  },
};