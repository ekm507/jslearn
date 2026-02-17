const express = require("express");
const cors = require("cors");
const sqlite = require("better-sqlite3");

const app = express();
app.use(cors());

app.get("/items", (req, res) => {
  items = [
    { id: 1, name: "Apple", price: 0.5, emoji: "🍎" },
    { id: 2, name: "Banana", price: 0.3, emoji: "🍌" },
    { id: 3, name: "Orange", price: 0.4, emoji: "🍊" },
  ];

  res.json(items);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
