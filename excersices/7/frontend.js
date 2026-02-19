var clouds = [];
const number_of_clouds = 8 * 2;

function draw() {
  background(220);
  drawScene();
}

function resetCloud(cloud) {
  // Remove animation
  cloud.style.animation = "none";

  const animation = document.getElementById("animation");
  const animationRect = animation.getBoundingClientRect();

  const cloudRect = cloud.getBoundingClientRect();

  // Reset position & randomness
  cloud.style.left = "-150px";
  cloud.style.top = `${Math.random() * animationRect.height * 0.8 - cloudRect.height}px`;

  // cloud.style.width = `${(Math.random() * 2 - 1) * cloudRect.width}px`;

  // Re‑apply animation
  cloud.style.animation = "";
  cloud.style.animationDuration = `${14 + Math.random() * 5}s`;
}

function drawScene() {
  const animation = document.getElementById("animation");
  const animationRect = animation.getBoundingClientRect();
  for (cloud of clouds) {
    const rect = cloud.getBoundingClientRect();

    if (rect.left > animationRect.width + animationRect.left) {
      resetCloud(cloud);
    }
  }
}

async function loadClouds() {
  for (let i = 1; i <= number_of_clouds; i++) {
    img_name = `img/cloud-${(i % 8) + 1}.webp`;
    var cloud = document.createElement("img");
    cloud.src = img_name;
    cloud.id = `cloud-${i}`;
    cloud.classList.add("cloud");
    cloud.style.top = `${Math.random() * window.innerHeight * 0.8}px`;
    cloud.style.left = `${Math.random() * window.innerWidth - cloud.style.width * 5}px`;
    cloud.style.animationDuration = `${14 + Math.random() * 5}s`;

    clouds.push(cloud);
    document.getElementById("clouds").appendChild(cloud);
  }
}

async function setup() {
  await loadClouds();
  window.setInterval(drawScene, 1);
}

setup();
