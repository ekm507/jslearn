const Express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const dbfilename = "./db.sqlite3";
const db = new Database(dbfilename);

const app = new Express();
app.use(Express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Back-end is running 😜\n");
});

app.listen(3000, () => {
  console.log("Server started");
});
