const express = require("express");
const router = express.Router();
const User = require("../config").User;
const DashboardContainer = require("../config").DashboardContainer;

router
  .route("/:userid/:workid/:id")
  .get(async (req, res) => {
    try {
      const userId = req.params.userid;
      const workspaceId = req.params.workid;
      const id = req.params.id;
      const userDoc = await User.doc(userId).get();
      const workspace = await userDoc.ref
        .collection("workspaces")
        .doc(workspaceId);
      const dashboard = await workspace.collection("dashboards").doc(id).get();
      const dashboardContainer = await dashboard.ref
        .collection("dashboardcontainers")
        .get();
      dashboardContainerList = dashboardContainer.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("DashboardContainer: ", dashboardContainerList);
      res.send(dashboardContainerList);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error retrieving DashboardContainer data" });
    }
  })
  .post(async (req, res) => {
    try {
      const userId = req.params.userid;
      const workspaceId = req.params.workid;
      const id = req.params.id;
      const userDoc = await User.doc(userId).get();
      const workspace = await userDoc.ref
        .collection("workspaces")
        .doc(workspaceId);
      const dashboard = await workspace.collection("dashboards").doc(id).get();
      const newDashboardContainer = await dashboard.ref
        .collection("dashboardcontainers")
        .add(req.body);
      res.send({ id: newDashboardContainer.id, ...req.body });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error adding DashboardContainer" });
    }
  });

router
  .route("/:userid/:workid/:dashid/:containerid")
  .delete(async (req, res) => {
    const userId = req.params.userid;
    const workspaceId = req.params.workid;
    const dashboardId = req.params.dashid;
    const id = req.params.containerid;

    const userDoc = await User.doc(userId).get();
    const workspace = await userDoc.ref
      .collection("workspaces")
      .doc(workspaceId);
    const dashboard = await workspace
      .collection("dashboards")
      .doc(dashboardId)
      .get();
    const dashboardContainer = await dashboard.ref
      .collection("dashboardcontainers")
      .doc(id)
      .delete();
    res.send({ id: id });
  })
  .put(async (req, res) => {
    try {
      const userId = req.params.userid;
      const workspaceId = req.params.workid;
      const dashboardId = req.params.dashid;
      const id = req.params.containerid;
      
      const userDoc = await User.doc(userId).get();
      const workspace = await userDoc.ref
        .collection("workspaces")
        .doc(workspaceId);
      const dashboard = await workspace
        .collection("dashboards")
        .doc(dashboardId)
        .get();
      const dashboardContainer = await dashboard.ref
        .collection("dashboardcontainers")
        .doc(id)
        .update(req.body);
      res.send({ id: id, ...req.body });
    } catch {
      console.error(error);
      res.status(500).json({ message: "Error updating DashboardContainer" });
    }
  });

module.exports = router;
