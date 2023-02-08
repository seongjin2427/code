const read = `7
1 6
6 3
3 5
4 1
2 4
4 7`;

const input = read.toString().trim().split("\n");

const N = input.shift();
const nodes = input.map((n) => n.split(" ").map((v) => +v));

class Tree {
  constructor() {
    this.root = { 1: [] };
  }
  add(n1, n2) {
    const keys = Object.keys(this.root).map((v) => +v);

    const key = keys.includes(n1) ? n1 : n2;
    const val = keys.includes(n1) ? n2 : n1;

    if (this.root[key]) this.root[key].push(val);
    else this.root[key] = [val];
    if (!this.root[val]) this.root[val] = [];
  }
  find(n) {
    for (const node in this.root) {
      if (this.root[node].includes(n)) {
        console.log(node);
      }
    }
  }
}

const t = new Tree();

for (let i = 0; i < nodes.length; i++) {
  const [start, end] = nodes[i];
  t.add(start, end);
}

for (let i = 2; i <= N; i++) {
  t.find(i);
}
