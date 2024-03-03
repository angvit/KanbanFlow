const express = require("express");
const router = express.Router();
const Dashboard_container = require("../config").Dashboard_container;

router.route("/").get(async (req, res) => {
  data = await Dashboard_container.get();
  res.json({ message: "Dashboard_containers" });
  console.log(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
});
