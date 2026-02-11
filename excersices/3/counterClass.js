// define another one

class Counter {
  constructor(initial = 0) {
    this.count = initial;
  }
  get() {
    return this.count;
  }
  increment() {
    this.count += 1;
  }
}

// make another counter function
const c = new Counter();

// start counting
let output = "";
let arr = [];
for (let i = 0; i < 5; i++) {
  c.increment();
  output += c.get() + " ";
  arr.push(c.get());
}
console.log(output);
console.log(arr);
