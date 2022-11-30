const read = `5 2`;

let [N, K] = read.toString().trim().split(' ').map(Number);

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));
