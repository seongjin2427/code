const read = `40`;

const input = read.toString().trim();

const tile = [4, 6];

for (let i = 2; i <= +input; i++) {
  tile[i] = BigInt(tile[i - 2]) + BigInt(tile[i - 1]);
}

console.log(tile[input - 1].toString());
