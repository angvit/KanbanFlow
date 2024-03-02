const express = require("express");
const router = express.Router();
const Workspace = require("../config").Workspace;

router.route
  .get("/", async (req, res) => {
    data = await Workspace.get();
    res.json({ message: "Workspaces" });
    console.log(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  })
//   .post("/", async (req, res) => {
//     const workspace = req.body;
//     await Workspace.add(workspace);
//     res.json({ message: "Workspace added" });
//   });

module.exports = router;
