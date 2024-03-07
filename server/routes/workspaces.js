const express = require("express");
const router = express.Router();
const Workspace = require("../config").Workspace;
const User = require("../config").User;

router
  .route("/:id")
  .get(async (req, res) => {
    const userId = req.params.id;
    const userDoc = await User.doc(userId).get();
    const workspaces = await userDoc.ref.collection("workspaces").get();
    const workspaceList = workspaces.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Workspaces: ", workspaceList);
    res.send(workspaceList);
  })
  .post(async (req, res) => {
    const workspace = req.body;
    const userId = req.params.id;

    try {
      const newWorkspace = await User.doc(userId)
        .collection("workspaces")
        .add(workspace);
      console.log("Workspace into collection of: ", userId);
      res.json({ message: "Workspace added" });
    } catch (error) {
      console.error("Error adding workspace: ", error);
      res.status(500).json({ message: "Error adding workspace" });
    }
  });

module.exports = router;
