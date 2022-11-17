const read = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;

const input = read.toString().trim().split('\n');
input.shift();

let check = [];
let sum = 0;
input.forEach((t) => {
  const ans = t.split('');
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === 'O') {
      check.push(ans[i]);
      sum += check.length;
    } else {
      check = [];
    }
  }
  console.log(sum);
  check = [];
  sum = 0;
});

// 깔끔한 코드.... 배워야함
// for (let i = 1; i <= num; i++) {
//   let count = 0;
//   let sum = 0;

//   for (let j = 0; j < input[i].length; j++) {
//     if (input[i][j] === 'O') {
//       count++;
//     } else {
//       count = 0;
//     }

//     sum += count;
//   }

//   console.log(sum);
// }
