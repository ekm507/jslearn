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

let current = "0";
let operator = null;
let previous = null;

function handlekey(key, display) {
  display = document.getElementById("display");
  if (["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(key)) {
    if (current === "0") {
      current = "";
    }
    current += key;
    display.textContent = current;
  } else if (key === ".") {
    if (!current.includes(".")) {
      current += key;
    } else if (current[current.length - 1] === ".") {
      current = current.slice(0, -1);
    }
    display.textContent = current;
  } else if (["+", "-", "*", "/"].includes(key)) {
    calculate();
    operator = key;
  } else if (key === "C") {
    if (current === "0") {
      operator = null;
      previous = null;
    } else {
      current = "0";
    }
    display.textContent = current;
  }
  if (current === "") {
    current = "0";
  }
  console.log(key, display.textContent, operator, previous);
}

function calculate() {
  console.log("Calculating...");
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  if (previous === null) {
    previous = current;
    current = "0";
    return;
  }
  result = operators[operator](+previous, +current);
  display.textContent = result;
  current = "0";
  previous = result;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handlekey(button.textContent, display);
  });
});

window.addEventListener("keypress", keyhandler);
function keyhandler(event) {
  handlekey(event.key, display);
}
