const read = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`;

let input = read.toString().trim().split("\n");

const N = input.shift();
const nodes = input.map((n) => n.split(" "));

const tree = {};

nodes.forEach(([node, left, right]) => {
  tree[node] = [left, right];
});

let result = "";

function preorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  result += node;
  preorder(lt);
  preorder(rt);
}

function inorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inorder(lt);
  result += node;
  inorder(rt);
}

function postorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postorder(lt);
  postorder(rt);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);

// nodes.forEach((n) => {
//   const [origin, left, right] = n;
//   tree[origin] = [];
//   if (left !== ".") tree[origin].push(left);
//   if (right !== ".") tree[origin].push(right);
// });

// preorder(tree);
// inorder(tree);
// postorder(tree);

// function preorder(obj) {
//   let result = "A";
//   const queue = [...obj.A];

//   while (queue.length) {
//     const node = queue.shift();

//     result += node;
//     queue.unshift(...obj[node]);
//   }

//   console.log(result);
// }

// function postorder(obj) {
//   const data = [];

//   function recursion(node) {
//     for (const n of obj[node]) {
//       recursion(n);
//     }
//     data.push(node);
//   }

//   recursion("A");
//   console.log(data.join(""));
// }

// function inorder(obj) {
//   const data = [];
//   console.log(obj);

//   function recursion(node) {
//     for (const n of obj[node]) {
//       recursion(n);
//       console.log("n", n);
//     }
//   }

//   recursion("A");
//   console.log(data.join(""));
// }

// function postorder2(obj) {
//   const data = [];
//   console.log(obj);

//   function recursion(node) {
//     data.push(node);
//     for (const n of obj[node]) {
//       recursion(n);
//     }
//   }

//   recursion("A");
//   console.log(data.join(""));
// }
