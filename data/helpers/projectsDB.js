const db = require("../config/dbConfig");

module.exports = {

  insert: function (project) {
    return db("projects").insert(project);
  },

  getProject: function (id) {
    const project = db("projects")
      .select(
        "projects.id",
        "projects.name",
        "projects.description",
        "flags.name as status")
      .join("flags", "projects.flag_id", "flags.id")
      .where("projects.id", id)
      .first();

    const actions = db("actions")
      .select(
        "actions.id",
        "actions.description",
        "actions.notes",
        "flags.name as status")
      .join("flags", "actions.flag_id", "flags.id")
      .where("actions.project_id", id);

    return Promise.all([project, actions]).then(results => {
      const [project, actions] = results;
      return {...project, actions};
    });
  }
};