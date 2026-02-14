// const { get } = require("https");
// document = require("document");
const baseUrl = "http://localhost:3000";

// join path to url
const joinPath = (path) =>
  path.startsWith("/") ? `${baseUrl}${path}` : `${baseUrl}/${path}`;

async function main() {
  document.getElementById("btn").addEventListener("click", async () => {
    const res = await fetch(joinPath("/"));
    const text = await res.text();
    document.getElementById("result").innerHTML = text;
  });
  document.getElementById("get-items").addEventListener("click", async () => {
    await getItems();
  });
}

async function getItems() {
  document.getElementById("container").innerHTML = "";
  const res = await fetch(joinPath("/items"));
  const items = await res.json();
  for (const item of items) {
    const div = document.createElement("div");
    div.className = "item";
    const name = document.createElement("h2");
    name.textContent = item.name;
    const desc = document.createElement("p");
    desc.textContent = item.description;
    const price = document.createElement("p");
    price.textContent = item.price + " ت";
    const image = document.createElement("img");
    image.src = item.image;
    div.appendChild(name);
    div.appendChild(desc);
    div.appendChild(price);
    div.appendChild(image);
    document.getElementById("container").appendChild(div);
  }
}

main();
