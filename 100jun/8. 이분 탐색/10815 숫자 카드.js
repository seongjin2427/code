const read = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10
`;

const input = read.toString().trim().split("\n");

const NNumber = new Set([...input[1].split(" ").map(Number)]);
const MNumber = input[3].split(" ").map(Number);
const answer = [];

for (const num of MNumber) {
  NNumber.has(num) ? answer.push(1) : answer.push(0);
}

console.log(answer.join(" "));

// for (const num of MNumber) {
//   const result = BinarySearch(NNumber, num);

//   if (result) answer += "1 ";
//   else answer += "0 ";
// }

// function BinarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor(arr.length / 2);
//   let result = false;

//   while (left <= right) {
//     if (target === arr[mid]) {
//       result = true;
//       break;
//     } else if (target > arr[mid]) {
//       left = mid + 1;
//       mid = Math.floor((right + left) / 2);
//     } else {
//       right = mid - 1;
//       mid = Math.floor(right / 2);
//     }
//   }

//   return result;
// }

// console.log(answer);
