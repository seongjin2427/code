const read = `4
1 3 7 5 8`;

let [N, numbers] = read.toString().trim().split('\n');

const isPrime = (n) => {
  if (n == 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(numbers.split(' ').filter((v) => isPrime(v)).length);
