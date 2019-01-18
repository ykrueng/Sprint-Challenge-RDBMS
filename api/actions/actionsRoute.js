const express = require("express");

const db = require("../../data/helpers/actionsDb");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { action } = req.body;
  try {
    const id = await db.insert(action);
    res.status(201).json({ id: id[0] });
  } catch (err) {
    next({ code: 500 });
  }
});

module.exports = router;
