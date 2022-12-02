const read = `500`;

let input = +read.toString().trim();

const arr = [];
let count = 665;

while (arr.length < input) {
  count++;
  let checked = String(count).includes('666');
  if (checked) arr.push(count);
}
console.log(arr[arr.length - 1]);



// 더 간단한 코드

// const read = `5`;

// let input = +read.toString().trim();

// let count = 665;

// while (input) {
//   count++;
//   if (String(count).includes('666')) input--;
// }
// console.log(count);
