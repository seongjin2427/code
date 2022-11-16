const read = `5 2
3
3 5 1
2
4 2`;

const input = read.toString().trim().split('\n');

const [N, M] = input.shift(' ').split(' ').map(Number);

function solve(inputs) {
  let answer = true;
  for (let i = 0; i < M; ++i) {
    const arr = inputs[i * 2 + 1].split(' ').map(Number);
    for (let j = 0; j < arr.length - 1; ++j) {
      if (arr[j] < arr[j + 1]) {
        return false;
      }
    }
  }
  return answer;
}
console.log(solve(input) ? 'Yes' : 'No');
// 시간 초과
// function check(arr, idx) {
//   const check = arr.slice(-1);
//   return check[0] === idx;
// }

// for (let i = 1; i <= N; i++) {
//   for (let arr of stack) {
//     if (check(arr, i)) arr.pop();
//   }
// }
// const isEmpty = stack.every((i) => !i.length);

// console.log(isEmpty ? 'Yes' : 'No');
