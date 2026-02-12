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
