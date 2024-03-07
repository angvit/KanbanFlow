const express = require("express");
const router = express.Router();
const Dashboard = require("../config").Dashboard;

router.route("/:id").get(async (req, res) => {
    console.log(req.params.id)
    res.json({ message: req.params.id });
//   const dashboards = await Dashboard.get();
//   const dashboardList = dashboards.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   res.send(dashboardList);
})

module.exports = router;
