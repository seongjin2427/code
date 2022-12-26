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

// 시간 초과
// const read = `10 512 512`;

// const [N, r, c] = read.toString().trim().split(' ').map(Number);

// const map = Array.from({ length: 2 ** N }, () =>
//   Array.from({ length: 2 ** N }, () => 0),
// );

// map[r][c] = 1;

// let count = 0;
// let answer = -1;

// const recursion = (x, y, length) => {
//   if (answer > -1) return;

//   if (length < 3) {
//     for (let i = 0; i < 2; i++) {
//       for (let j = 0; j < 2; j++) {
//         if (map[y + i][x + j] === 1) answer = count;
//         count++;
//         map[y + i][x + j] = 1;
//       }
//     }
//     return;
//   }

//   length /= 2;
//   recursion(x, y, length);
//   recursion(x + length, y, length);
//   recursion(x, y + length, length);
//   recursion(x + length, y + length, length);
// };

// recursion(0, 0, 2 ** N);
// console.log(answer);
