const express = require("express");
const router = express.Router();
const Workspace = require("../config").Workspace;
const User = require("../config").User;

router
  .route("/")
  .get(async (req, res) => {
    data = await Workspace.get();
    res.json({ message: "Workspaces" });
    console.log(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  })
  .post(async (req, res) => {
    const workspace = req.body;
    const newDash = await Workspace.add(workspace);
    await User.doc("BWqz9HkUceD0qrUsoZ3I") //MAKE SURE TO GET ID WHEN YOU DO THIS!!!!!
      .collection("workspaces")
      .doc(newDash.id)
      .set({});

    res.json({ message: "Workspace added" });
  });

module.exports = router;
