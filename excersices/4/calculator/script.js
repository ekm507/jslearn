const keysLayout = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "C",
  ".",
  "0",
  "+",
];

const keysContainer = document.getElementById("keys");
// const display = document.getElementById("display");

buttons = [];
for (const key of keysLayout) {
  button = document.createElement("button");
  button.textContent = key;
  keysContainer.appendChild(button);
  buttons.push(button);
}

let current = "";
let operator = null;
let previous = null;

function handlekey(key, display) {
  display = document.getElementById("display");
  if (key in ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]) {
    if (display.textContent === "0") display.textContent = "";
    display.textContent += key;
    current = display.textContent;
  } else if (key === ".") {
    if (!display.textContent.includes(".")) {
      display.textContent += key;
    } else if (display.textContent[display.textContent.length - 1] === ".") {
      display.textContent = display.textContent.slice(0, -1);
    }
  } else if (key in ["+", "-", "*", "/"]) {
    operator = key;
    previous = display.textContent;
    current = "";
    display.textContent = "0";
    calculate();
  } else if (key === "C") {
    if (display.textContent === "0") {
      current = "";
      operator = null;
      previous = null;
    } else {
      display.textContent = "0";
    }
  }
  console.log(key, display.textContent, operator, previous);
}
