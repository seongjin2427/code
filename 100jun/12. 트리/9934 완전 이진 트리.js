const read = `2
2 1 3`;

let input = read.toString().trim().split("\n");

const K = +input.shift();
const paper = input[0].split(" ").map(Number);

const mid = getMid(paper);
const split = makeArr(paper, mid);

let result = `${mid}\n`;

search(split);

function search(arr) {
  const queue = [...arr];
  const next = [];

  while (queue.length) {
    const el = queue.shift();
    const mid = getMid(el);

    result += `${mid} `;

    const splitedArr = makeArr(el, mid);
    if (!splitedArr) continue;
    next.push(...splitedArr);
  }

  if (!next.length) {
    console.log(result);
    return;
  }
  result += "\n";
  search(next);
}

function getMid(arr) {
  return arr[Math.floor(arr.length - 1) / 2];
}

function makeArr(arr, m) {
  if (arr.length < 2) return;

  const left = arr.slice(0, arr.indexOf(m));
  const right = arr.slice(arr.indexOf(m) + 1);
  return [left, right];
}

// 첫 번째 시도
// let result = "";
// let mid = getMid(paper);

// result += `${mid}\n`;

// function search(arr) {
//   let next = [];

//   for (let a of arr) {
//     const mid = getMid(a);
//     result += `${a[mid]} `;
//     next.push(...makeArr(a, mid));
//   }

//   result += "\n";

//   if (next[0].length === 1) return next;
//   return search(next);
// }

// function makeArr(arr, mid) {
//   let l = arr.slice(0, mid);
//   let r = arr.slice(mid + 1);
//   return [l, r];
// }

// function getMid(arr) {
//   return Math.ceil(arr.length - 1) / 2;
// }

// const re = search(makeArr(paper, mid));
// re.forEach((r) => (result += `${r} `));
// console.log(result);
