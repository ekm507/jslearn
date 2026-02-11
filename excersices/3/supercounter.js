const counter = (function (initialValue) {
  let value = 0;

  function setValue(v) {
    value = v;
  }
  setValue(initialValue);

  return {
    increment() {
      value++;
    },
    decrement() {
      value--;
    },
    getValue() {
      return value;
    },
  };
})(10);

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
counter.decrement();
console.log(counter.getValue());
