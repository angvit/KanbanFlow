const express = require("express");
const router = express.Router();
const User = require("../config").User;
const Task = require("../config").Task;

router
  .route("/:userid/:workid/:dashid/:id")
  .get(async (req, res) => {
    try {
      const userId = req.params.userid;
      const workspaceId = req.params.workid;
      const dashboardId = req.params.dashid;
      const id = req.params.id;

      const userDoc = await User.doc(userId).get();
      const workspace = await userDoc.ref
        .collection("workspaces")
        .doc(workspaceId);
      const dashboard = await workspace
        .collection("dashboards")
        .doc(dashboardId);
      const dashboardContainer = await dashboard
        .collection("dashboardcontainers")
        .doc(id)
        .get();
      const task = await dashboardContainer.ref.collection("tasks").get();
      taskList = task.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Task: ", taskList);
      res.send(taskList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving Task data" });
    }
  })
  .post(async (req, res) => {
    try {
      const userId = req.params.userid;
      const workspaceId = req.params.workid;
      const dashboardId = req.params.dashid;
      const id = req.params.id;

      const userDoc = await User.doc(userId).get();
      const workspace = await userDoc.ref
        .collection("workspaces")
        .doc(workspaceId);
      const dashboard = await workspace
        .collection("dashboards")
        .doc(dashboardId);
      const dashboardContainer = await dashboard
        .collection("dashboardcontainers")
        .doc(id)
        .get();
      const newTask = await dashboardContainer.ref
        .collection("tasks")
        .add(req.body);
      res.send({ id: newTask.id, ...req.body });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error adding Task" });
    }
  });

module.exports = router;
