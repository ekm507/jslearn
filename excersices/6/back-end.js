const express = require("express");
const cors = require("cors");
const sqlite = require("better-sqlite3");

const app = express();
app.use(cors());

app.get("/items", (req, res) => {
  const items = [
    { id: 1, name: "Apple", price: 0.5, emoji: "🍎" },
    { id: 2, name: "Banana", price: 0.3, emoji: "🍌" },
    { id: 3, name: "Orange", price: 0.4, emoji: "🍊" },
    { id: 4, name: "Strawberry", price: 0.6, emoji: "🍓" },
    { id: 5, name: "Grapes", price: 0.7, emoji: "🍇" },
    { id: 6, name: "Watermelon", price: 1.2, emoji: "🍉" },

    { id: 7, name: "Carrot", price: 0.2, emoji: "🥕" },
    { id: 8, name: "Broccoli", price: 0.8, emoji: "🥦" },
    { id: 9, name: "Tomato", price: 0.4, emoji: "🍅" },
    { id: 10, name: "Corn", price: 0.5, emoji: "🌽" },

    { id: 11, name: "Bread", price: 1.0, emoji: "🍞" },
    { id: 12, name: "Cheese", price: 1.5, emoji: "🧀" },
    { id: 13, name: "Eggs", price: 1.2, emoji: "🥚" },
    { id: 14, name: "Milk", price: 0.9, emoji: "🥛" },

    { id: 15, name: "Pizza Slice", price: 2.0, emoji: "🍕" },
    { id: 16, name: "Hamburger", price: 2.5, emoji: "🍔" },
    { id: 17, name: "French Fries", price: 1.8, emoji: "🍟" },
    { id: 18, name: "Hot Dog", price: 1.7, emoji: "🌭" },

    { id: 19, name: "Rice", price: 1.1, emoji: "🍚" },
    { id: 20, name: "Noodles", price: 1.3, emoji: "🍜" },

    { id: 21, name: "Coffee", price: 1.5, emoji: "☕" },
    { id: 22, name: "Tea", price: 1.0, emoji: "🍵" },
    { id: 23, name: "Soda", price: 0.9, emoji: "🥤" },

    { id: 24, name: "Chocolate", price: 1.4, emoji: "🍫" },
    { id: 25, name: "Cookie", price: 0.8, emoji: "🍪" },
    { id: 26, name: "Ice Cream", price: 1.6, emoji: "🍨" },

    { id: 27, name: "Fish", price: 3.0, emoji: "🐟" },
    { id: 28, name: "Chicken", price: 2.8, emoji: "🍗" },
    { id: 29, name: "Steak", price: 4.0, emoji: "🥩" },

    { id: 30, name: "Popcorn", price: 1.2, emoji: "🍿" },
  ];

  res.json(items);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
