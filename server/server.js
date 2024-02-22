const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
  res.send("Hello World");
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);
