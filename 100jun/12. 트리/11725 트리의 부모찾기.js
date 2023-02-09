const read = `12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12`;

let input = read.toString().trim().split("\n");

const N = +input.shift();
const tree = Array.from({ length: N + 1 }, () => new Array());
input.forEach((node) => {
  const [start, end] = node.split(" ").map(Number);
  tree[start].push(end);
  tree[end].push(start);
});

let check = Array.from({ length: N + 1 }, () => 0);
function bfs() {
  const queue = [];
  check[1] = 1;

  for (let next of tree[1]) {
    check[next] = 1;
    queue.push(next);
  }

  while (queue.length) {
    const node = queue.shift();
    for (let next of tree[node]) {
      if (check[next]) continue;
      check[next] = node;
      queue.push(next);
    }
  }
}
bfs();

let result = "";
check = check.slice(2);
check.forEach((c) => (result += `${c}\n`));
console.log(result);

// for (let i = 2; i <= N; i++) {
//   t.find(i);
// }

// 첫 번째 시도
// const input = read.toString().trim().split("\n");

// const N = input.shift();
// const nodes = input.map((n) => n.split(" ").map((v) => +v));

// class Tree {
//   constructor() {
//     this.root = { 1: [] };
//   }
//   add(n1, n2) {
//     const keys = Object.keys(this.root).map((v) => +v);

//     const key = keys.includes(n1) ? n1 : n2;
//     const val = keys.includes(n1) ? n2 : n1;

//     if (this.root[key]) this.root[key].push(val);
//     else this.root[key] = [val];
//     if (!this.root[val]) this.root[val] = [];
//   }
//   find(n) {
//     for (const node in this.root) {
//       if (this.root[node].includes(n)) {
//         console.log(node);
//       }
//     }
//   }
// }

// const t = new Tree();

// for (let i = 0; i < nodes.length; i++) {
//   const [start, end] = nodes[i];
//   t.add(start, end);
// }

// for (let i = 2; i <= N; i++) {
//   t.find(i);
// }
