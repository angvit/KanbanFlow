const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// TESTING BACKEND USE THIS AS REFERENCE WHEN CREATING ROUTES
app.get("/get", async (req, res) => {
  const data = await User.get();
  const list = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(list);
  res.send(list);
});

app.post("/post", async (req, res) => {
  const user = req.body;
  await User.add(user);
  res.send({ message: "User added" });
});

app.put("/put", async (req, res) => {
  const userId = req.body.userId;
  const updatedUserData = req.body.data;
  console.log(req.body, updatedUserData);
  try {
    await User.doc(userId).update(updatedUserData);

    res.send({ message: "User updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating user" });
  }
});

app.delete("/delete", async (req, res) => {
  const userId = req.body.userId;
  try {
    await User.doc(userId).delete();
    res.send({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting user" });
  }
});

// ROUTES
const userRouter = require("./routes/users");
app.use("/users", userRouter);
