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

    const workspaceList = await Promise.all(
      workspaces.docs.map(async (doc) => {
        const workspace = await userDoc.ref
          .collection("workspaces")
          .doc(doc.id);
        const dashboardSnapshot = await workspace
          .collection("dashboards")
          .get();
        const dashboard = dashboardSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("ALERT Dashboard: ", dashboard.id);
        return {
          id: doc.id,
          ...doc.data(),
          boards: dashboard,
        };
      })
    );

    console.log("Workspaces: ", workspaceList);
    res.send(workspaceList);
  })
  .post(async (req, res) => {
    const workspace = req.body;
    const userId = req.params.id;

    try {
      await User.doc(userId).collection("workspaces").add(workspace);
      console.log("Workspace into collection of: ", userId);
      res.json({ message: "Workspace added" });
    } catch (error) {
      console.error("Error adding workspace: ", error);
      res.status(500).json({ message: "Error adding workspace" });
    }
  });

module.exports = router;
