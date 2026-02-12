images = {
  rock: "img/rock.png",
  paper: "img/paper.png",
  scissors: "img/scissors.png",
};
// document.getElementById("p1-img").src = images.rock;
// document.getElementById("p2-img").src = images.rock;
document.getElementById("status-text").textContent = "hi";

const choice_handler = function (choice) {
  return function () {
    document.getElementById("p1-img").src = images[choice];
    machine_choice = autochoose();
    status = check_win(choice, machine_choice);
    document.getElementById("status-text").textContent = status;
    paragraph = document.createElement("p");
    paragraph.textContent = `${status}`;
    document.getElementById("scores").appendChild(paragraph);
  };
};

function autochoose() {
  const choices = Object.keys(images);
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("p2-img").src = images[randomChoice];
  return randomChoice;
}

function check_win(p1, p2) {
  if (p1 === "rock" && p2 === "scissors") {
    return "win";
  } else if (p1 === "paper" && p2 === "rock") {
    return "win";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "win";
  } else if (p1 === p2) {
    return "tie";
  } else {
    return "lose";
  }
}

for (var choice in images) {
  document
    .getElementById(choice)
    .addEventListener("click", choice_handler(choice));
}
