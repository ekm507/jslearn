// define a function that gives a counter
function counterer() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

// make a counter function
const counter = counterer();

// start counting
console.log(counter());
console.log(counter());
