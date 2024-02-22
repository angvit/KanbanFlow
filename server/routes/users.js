const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Users" });
  res.send("Users");
});

router.get("/new", (req, res) => {
  res.json({ message: "New Users" });
  res.send("New Users");
});

// KEEP DYNAMIC ROUTES IN THE BOTTOM TO NOT OVERLAP WITH STATIC ROUTES

router
  .route("/:id")
  .get((req, res) => {
    res.json({ message: `Get User ${req.params.id}` });
  })
  .post((req, res) => {
    res.json({ message: `Create User ${req.params.id}` });
  })
  .put((req, res) => {
    res.json({ message: `Update User ${req.params.id}` });
  })
  .delete((req, res) => {
    res.json({ message: `Delete User ${req.params.id}` });
  });

router.param("id", (req, res, next, id) => {
  // Will be executed when the parameter :id is present in the URL
  // Usefull to not have to repeat code for the same parameter
  console.log("User ID: ", id);
  next();
});

module.exports = router;
