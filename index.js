const read = `2 3 1`;

const [N, r, c] = read.toString().trim().split(' ').map(Number);

let res = 0;
const recursion = (x, y, length) => {
  if (x === r && y === c) {
    console.log(res);
    return;
  }

  if (r >= x && r < x + length && c >= y && c < y + length) {
    length = parseInt(length / 2);
    recursion(x, y, length);
    recursion(x, y + length, length);
    recursion(x + length, y, length);
    recursion(x + length, y + length, length);
  } else res += length * length;
};

recursion(0, 0, 2 ** N);