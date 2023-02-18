const read = `5
1 2
2 3
3 4
4 5
4
1 1
1 2
2 1
2 2`;

let input = read.toString().trim().split("\n");

const N = +input.shift();
const nodes = input.splice(0, N - 1);
const tree = Array.from({ length: N + 1 }, () => new Array());

nodes.forEach((node) => {
  const [start, end] = node.split(" ").map(Number);
  tree[start].push(end);
  tree[end].push(start);
});

const q = +input.shift();
const questions = input.map((question) => question.split(" ").map(Number));

let result = "";
questions.forEach(([t, k]) => {
  if (t === 1) {
    result += tree[k].length > 1 ? "yes\n" : "no\n";
  } else if (t === 2) {
    result += "yes\n";
  }
});

console.log(result);
