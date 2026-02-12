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
  if (["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(key)) {
    if (current === "0") {
      display.textContent = "";
      current = "";
    }
    current += key;
  } else if (key === ".") {
    if (!current.includes(".")) {
      current += key;
    } else if (current[current.length - 1] === ".") {
      current = current.slice(0, -1);
    }
  } else if (["+", "-", "*", "/"].includes(key)) {
    operator = key;
    calculate();
  } else if (key === "C") {
    if (current === "0") {
      current = "";
      operator = null;
      previous = null;
    } else {
      current = "0";
    }
  }
  if (current === "") {
    current = "0";
  }
  display.textContent = current;
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
  current = result;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handlekey(button.textContent, display);
  });
});
