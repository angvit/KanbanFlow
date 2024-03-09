const express = require("express");
const router = express.Router();
const User = require("../config").User;
// KEEP DYNAMIC ROUTES IN THE BOTTOM TO NOT OVERLAP WITH STATIC ROUTES

router
  .route("/")
  .get((req, res) => {
    res.json({ message: `Get User ${req.params.id}` });
  })
  .post(async (req, res) => {
    const userId = req.body.sub;
    const userCollection = await User.doc(userId).get();
    try {
      if (userCollection.exists) {
        console.log("User already exists");
      } else {
        const docRef = await User.doc(userId).set(req.body);
      }
    } catch (error) {
      console.log(error);
    }
  });
// .put((req, res) => {
//   res.json({ message: `Update User ${req.params.id}` });
// })
// .delete((req, res) => {
//   res.json({ message: `Delete User ${req.params.id}` });
// });

// router.param("id", (req, res, next, id) => {
//   // Will be executed when the parameter :id is present in the URL
//   // Usefull to not have to repeat code for the same parameter
//   console.log("User ID: ", id);
//   next();
// });

module.exports = router;
