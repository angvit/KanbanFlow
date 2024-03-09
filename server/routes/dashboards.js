const express = require("express");
const router = express.Router();
const Dashboard = require("../config").Dashboard;
const User = require("../config").User;

router.route("/:userid/:id").get(async (req, res) => {
  const userId = req.params.userid;
  const workspaceId = req.params.id;
  const userDoc = await User.doc(userId).get();
  const workspace = await userDoc.ref.collection("workspaces").doc(workspaceId);
  const dashboard = await workspace.collection("dashboards").get();
  dashboardList = dashboard.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log("Dashboards: ", dashboardList);
  res.send(dashboardList);
});

module.exports = router;
