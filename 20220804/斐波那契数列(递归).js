//1 1 2 3 5 8 13 21 34 55
//1 2 3 4 5 6 7  8  9  10
const fibonacci = (n) => {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10));
