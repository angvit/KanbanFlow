const express = require("express");
const router = express.Router();
const Workspace = require("../config").Workspace;

router.get("/", async (req, res) => {
  data = await Workspace.get();
  res.json({ message: "Workspaces" });
  console.log(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
});

module.exports = router;
