const read = `1 2
2 3
3 2
4 5
0 0

0 0

1 2  2 1  0 0

1 2  0 0

1 1  0 0

6 8  5 3  5 2  6 4
5 6  0 0

8 1  7 3  6 2  8 9  7 5
7 4  7 8  7 6  0 0

3 8  6 8  6 4
5 3  5 6  5 2  0 0

-1 -1`;

const input = read.toString().trim().split("\n").join("  ").split("    ");

input.pop();
input.map((test, index) => {
  const tree = test.split("  ");
  solution(tree, index + 1);
});

function solution(arr, index) {
  const tree = {};

  for (let i = 0; i < arr.length; i++) {
    const [start, end] = arr[i].split(" ");

    if (start === "0" && end === "0") continue;

    if (tree[start]) tree[start].push(end);
    else tree[start] = [end];
  }

  console.log(tree);
  isTree(uniqueRoot(tree) && uniqueEdge(tree), index);
}

function uniqueRoot(tree) {
  if (Object.keys(tree).length === 0) return true;

  const keys = Object.keys(tree);
  const values = new Set(Object.values(tree).flat());

  for (const key of keys) {
    if (!values.has(key)) return true;
  }
}

function uniqueEdge(tree) {
  const values = Object.values(tree).flat();
  const setCollection = new Set(values);
  return values.length === setCollection.size;
}

function isTree(boolean, index) {
  if (boolean) console.log(`Case ${index} is a tree.`);
  else console.log(`Case ${index} is not a tree.`);
}
