const read = `10`;

const input = read.toString().trim();

let [a, b] = [null, null];
const arr = [
  [0, 1],
  [1, 1],
];

for (let i = 2; i < +input; i++) {
  a = arr[i - 2][0] + arr[i - 1][0];
  b = arr[i - 2][1] + arr[i - 1][1];
  arr[i] = [a, b];
}
console.log(arr[input - 1].join(" "));

// for (let i = 0; i < +input; i++) {
//   let temp = "";
//   for (let j = 0; j < str.length; j++) {
//     if (str[j] === "A") temp += "B";
//     if (str[j] === "B") temp += "BA";
//   }
//   str = temp;
// }

// const aCount = str.match(/A/g).length;
// const bCount = str.match(/B/g).length;

// console.log(`${aCount} ${bCount}`);
