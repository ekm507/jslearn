function counter() {
  const count = { value: 0 };
  return () => count.value++;
}

a = counter();

console.log(a());
console.log(a());
