const read = `4
3 2 3 5`;

const [N, n] = read.toString().trim().split('\n');

const B = n.split(' ').map(Number);
const A = [B[0]];

for (let i = 1; i < N; i++) {
  const sum = A.reduce((a, b) => a + b, 0);
  A.push(B[i] * (i + 1) - sum);
}

console.log(A.join(' '));
