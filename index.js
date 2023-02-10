const read = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`;

let input = read.toString().trim().split("\n");

console.log(input);
const N = input.shift();
const nodes = input.map((n) => n.split(" "));

const tree = {};

nodes.forEach((n) => {
  const [origin, left, right] = n;
  tree[origin] = [];
  if (left !== ".") tree[origin].push(left);
  if (right !== ".") tree[origin].push(right);
});

preorder(tree);
inorder(tree);

function preorder(obj) {
  let result = "A";
  const queue = [...obj.A];

  while (queue.length) {
    const node = queue.shift();

    result += node;
    queue.unshift(...obj[node]);
  }

  console.log(result);
}

function inorder(obj) {
  let result = "A";
  const queue = [...obj.A];

  while (queue.length) {
    const node = queue.pop();

    result += node;
    queue.unshift(...obj[node]);
  }

  console.log(result);
}
