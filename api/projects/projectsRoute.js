const express = require("express");

const db = require("../../data/helpers/projectsDB");

const router = express.Router();

router
  .post("/", async (req, res, next) => {
    const { project } = req.body;
    try {
      const id = await db.insert(project);
      res.status(201).json({ id: id[0] });
    } catch (err) {
      next({ code: 500 });
    }
  })
  .get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const project = await db.getProject(id);
      console.log(project)
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
