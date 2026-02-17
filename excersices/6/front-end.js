const API_BASE = "http://localhost:3000";

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

get_items();
