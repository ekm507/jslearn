const Express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const dbfilename = "./db.sqlite3";
const db = new Database(dbfilename);

db.prepare(
  "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT NOT NULL, price REAL NOT NULL, image TEXT NOT NULL)",
).run();

function createItem(name, description, price, image) {
  const stmt = db.prepare(
    "INSERT INTO items (name, description, price, image) VALUES (?, ?, ?, ?)",
  );
  const info = stmt.run(name, description, price, image);
  return info.lastInsertRowid;
}

// db.prepare("DROP * FROM items").run();
createItem("عروسک", "عروسک شبیه عرفان", 799, "img/doll.jpg");
createItem("سنجاق سر", "سنجاق سر چرمی به شکل گل", 449, "img/hairpin.jpg");

const app = new Express();
app.use(Express.json());
app.use(Express.static("public"));
app.use(
  cors({
    origin: "http://localhost:8000",
  }),
);

app.get("/", (req, res) => {
  res.send("Back-end is running 😜\n");
});

app.get("/items", (req, res) => {
  const stmt = db.prepare("SELECT * FROM items");
  const items = stmt.all();
  res.json(items);
});

app.listen(3000, () => {
  console.log("Server started");
});
