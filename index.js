const read = `3
1 6 4 3 5 2 7`;

let input = read.toString().trim().split("\n");

const K = +input.shift();
const paper = input[0].split(" ").map(Number);

let result = "";
let mid = getMid(paper);

result += `${mid}\n`;

function search(arr) {
  let next = [];

  for (let a of arr) {
    const mid = getMid(a);
    result += `${a[mid]} `;
    next.push(...makeArr(a, mid));
  }

  result += "\n";

  if (next[0].length === 1) return next;
  return search(next);
}

function makeArr(arr, mid) {
  let l = arr.slice(0, mid);
  let r = arr.slice(mid + 1);
  return [l, r];
}

function getMid(arr) {
  return Math.ceil(arr.length - 1) / 2;
}

const re = search(makeArr(paper, mid));
re.forEach((r) => (result += `${r} `));
console.log(result);
