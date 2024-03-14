const express = require("express");
const router = express.Router();
const DashboardContainer = require("../config").DashboardContainer;

router.route("/").get(async (req, res) => {
  try {
    const data = await DashboardContainer.get();
    res.json({ message: "DashboardContainer", data });
    console.log(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving DashboardContainer data" });
  }
});

module.exports = router;
