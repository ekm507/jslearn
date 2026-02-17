const API_BASE = "http://localhost:3000";
const cart = [];

async function get_items() {
  const response = await fetch(API_BASE + "/items");
  items = await response.json();
  for (item of items) {
    document.getElementById("items").innerHTML +=
      `<div id="item-${item.id}" class="item">
        <p>${item.emoji}</p><p><em>${item.name}</em></p><p>${item.price}$</p>
      </div>`;
  }
}

function add_to_cart(item_id) {
  cart.push(item_id);
}

function give_items_click_events() {
  item = document.getElementById("item-1");
  console.log(item);

  items = document.getElementById("items");
  for (item of items.children) {
    console.log(item.getElementsByTagName("p")[0].innerText);
    item.addEventListener("click", () => {
      add_to_cart(item.id.split("-")[1]);
      console.log(cart);
    });
  }
}

async function main() {
  await get_items();
  await give_items_click_events();
}

main();
