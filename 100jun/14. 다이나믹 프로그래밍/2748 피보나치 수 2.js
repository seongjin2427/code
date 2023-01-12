const read = '90';

const input = +read.toString().trim();

const fibo = [0, 1];

for (let i = 2; i <= input; i++) {
  fibo[i] = BigInt(fibo[i - 2]) + BigInt(fibo[i - 1]);
}

console.log(fibo[input].toString());
