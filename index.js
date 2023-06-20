function isPrime(n) {
  if (!n || n == 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const prime = n.toString(k).split("0");
  return prime.filter(isPrime).length;
}

const n = 110011;
const k = 10;

console.log(solution(n, k));
