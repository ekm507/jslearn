const API_BASE = "http://localhost:3000";
const cart = new Object();

function add_to_cart(item_id) {
  if (item_id in cart) {
    cart[item_id]++;
  } else {
    cart[item_id] = 1;
  }
}
async function get_items() {
  const response = await fetch(API_BASE + "/items");
  const items = await response.json();

  const container = document.getElementById("items");

  for (const item of items) {
    container.innerHTML += `
      <div id="item-${item.id}" class="item">
        <p>${item.emoji}</p>
        <p><em>${item.name}</em></p>
        <p>${item.price}$</p>
      </div>`;
  }
}

function give_items_click_events() {
  const itemsContainer = document.getElementById("items");

  for (const itemEl of itemsContainer.children) {
    itemEl.addEventListener("click", () => {
      add_to_cart(itemEl.id.split("-")[1]);
      console.log(cart);
    });
  }
}

async function main() {
  await get_items();
  give_items_click_events();
}

main();
