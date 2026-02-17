const API_BASE = "http://localhost:3000";
const cart = new Object();
const page_items = new Object();

function add_to_cart(item_id) {
  if (item_id in cart) {
    cart[item_id]++;
  } else {
    cart[item_id] = 1;
  }
}

function remove_from_cart(item_id) {
  if (item_id in cart) {
    cart[item_id]--;
    if (cart[item_id] === 0) {
      delete cart[item_id];
    }
  }
}

async function get_items() {
  const response = await fetch(API_BASE + "/items");
  const items = await response.json();

  for (const item of items) {
    page_items[item.id] = item;
  }

  const container = document.getElementById("items");

  for (const item of items) {
    container.innerHTML += `
      <div id="item-${item.id}" class="item">
        <p>${item.emoji}</p>
        <p><em>${item.name}</em></p>
        <p>${item.price}$</p>
        <p class="quantity">0</p>
        <button class="add clickable">+</button>
        <button class="remove clickable" disabled>-</button>

      </div>`;
  }
}

function update_cart_count() {
  const cart_count = document.getElementById("cart-count");
  cart_count.textContent = Object.keys(cart).length;
}

function give_items_click_events() {
  const itemsContainer = document.getElementById("items");

  for (const itemEl of itemsContainer.children) {
    const plus_button = itemEl.querySelector(".add");
    const minus_button = itemEl.querySelector(".remove");

    plus_button.addEventListener("click", () => {
      add_to_cart(itemEl.id.split("-")[1]);
      itemEl.querySelector(".quantity").textContent =
        cart[itemEl.id.split("-")[1]] || 0;

      if (+itemEl.querySelector(".quantity").textContent > 0) {
        itemEl.querySelector(".remove").disabled = false;
      }

      update_cart_count();
    });

    minus_button.addEventListener("click", () => {
      remove_from_cart(itemEl.id.split("-")[1]);
      itemEl.querySelector(".quantity").textContent =
        cart[itemEl.id.split("-")[1]] || 0;

      if (+itemEl.querySelector(".quantity").textContent <= 0) {
        itemEl.querySelector(".remove").disabled = true;
      }

      update_cart_count();
    });
  }
}

function show_cart_items() {
  document.getElementById("cart-items").innerHTML = "";

  for (const item in cart) {
    itemEl = document.createElement("p");
    itemEl.textContent = `${page_items[item].name}: ${cart[item]}`;
    document.getElementById("cart-items").appendChild(itemEl);
  }
}

function give_cart_event() {
  const cartItems = document.getElementById("cart");
  cartItems.addEventListener("click", (event) => {
    // if (event.target.classList.contains("remove")) {
    //   const itemId = event.target.closest(".item").id.split("-")[1];
    //   remove_from_cart(itemId);
    show_cart_items();
  });
}

async function main() {
  await get_items();
  give_items_click_events();
  give_cart_event();
}

main();
