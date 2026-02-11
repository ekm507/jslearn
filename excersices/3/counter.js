// define a function that gives a counter
function counterer(initial = 0) {
  let count = initial;
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
