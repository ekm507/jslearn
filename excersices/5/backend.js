const Express = require("express");
const Database = require("better-sqlite3");

const dbfilename = "./db.sqlite3";
const db = new Database(dbfilename);

const app = new Express();
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Back-end is running");
});

app.listen(3000, () => {
  console.log("Server started");
});
