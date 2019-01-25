const express = require("express");

const configMdlware = require("./config/middleware");
const error = require("./common/error");

const projectsRoute = require("./projects/projectsRoute");
const actionsRoute = require("./actions/actionsRoute");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome RDBMS and SQL project");
});

server.use("/projects", projectsRoute);
server.use("/actions", actionsRoute);

server.use(error);

module.exports = server;