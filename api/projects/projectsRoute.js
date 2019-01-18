const express = require("express");

const db = require("../../data/helpers/projectsDB");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { project } = req.body;
  try {
    const id = await db.insert(project);
    res.status(201).json({ id: id[0] });
  } catch (err) {
    next({ code: 500 });
  }
});

module.exports = router;
