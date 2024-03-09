const express = require("express");
const router = express.Router();
const DashboardContainer = require("../config").DashboardContainer;

router.route("/:userid/:workid/:id").get(async (req, res) => {
  try {
    const userId = req.params.userid;
    const workspaceId = req.params.workid;
    const id = req.params.id;
    const userDoc = await User.doc(userId).get();
    const workspace = await userDoc.ref
      .collection("workspaces")
      .doc(workspaceId);
    const dashboard = await workspace.collection("dashboards").doc(id).get();
    const DashboardContainer = await dashboard.ref
      .collection("containers")
      .get();
    console.log("DashboardContainer: ", DashboardContainer);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving DashboardContainer data" });
  }
});

module.exports = router;
