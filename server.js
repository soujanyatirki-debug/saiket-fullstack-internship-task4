const express = require("express");
const app = express();
app.use(express.json());
let users = [];
//To Create user
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "User added", user });
});
//To Get all users
app.get("/users", (req, res) => {
  res.json(users);
});
//TO Update user
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json({ message: "User updated" });
});
//To Delete user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.json({ message: "User deleted" });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});