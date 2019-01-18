const db = require("../config/dbConfig");

module.exports = {
  insert: function(action) {
    return db("actions").insert(action);
  },

  getAction: function(id) {
    const action = db("actions")
      .select(
        "actions.id",
        "actions.description",
        "actions.notes",
        "flags.name as status",
        "projects.name as project"
      )
      .join("flags", "actions.flag_id", "flags.id")
      .join("projects", "actions.project_id", "projects.id")
      .where("actions.id", id)
      .first();

    const contexts = db("contexts")
      .select("contexts.name")
      .join("action_context", "contexts.id", "action_context.context_id")
      .where("action_context.action_id", id);

    return Promise.all([action, contexts]).then(([action, contexts]) => ({
      ...action,
      contexts: contexts.map(context => context.name)
    }));
  }
};
