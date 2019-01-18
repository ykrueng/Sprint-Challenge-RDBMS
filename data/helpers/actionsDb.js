const db = require("../config/dbConfig");

module.exports = {
  insert: function (action) {
    return db("actions").insert(action);
  },
};