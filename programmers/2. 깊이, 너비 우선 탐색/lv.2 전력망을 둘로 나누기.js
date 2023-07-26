function solution(n, wires) {
  let min = Infinity;
  const tree = {};

  wires.forEach((wire) => {
    const [v1, v2] = wire;
    tree[v1] ?? (tree[v1] = []);
    tree[v2] ?? (tree[v2] = []);
    tree[v1].push(v2);
    tree[v2].push(v1);
  });

  const disconnect = (v1, v2, tree) => {
    tree[v1] = tree[v1].filter((tower) => tower !== v2);
    tree[v2] = tree[v2].filter((tower) => tower !== v1);
    return tree;
  };

  const count = (v, tree) => {
    const queue = [tree[v]];
    const towerCount = new Set().add(v);

    while (queue.length) {
      const towers = queue.shift();

      towers.forEach((tower) => {
        const target = tree[tower];
        queue.push(target);
        towerCount.add(tower);
        for (const prev of target) {
          disconnect(prev, tower, tree);
        }
      });
    }

    return towerCount.size;
  };

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let target = { ...tree };
      if (i !== j && target[i].includes(j) && target[j].includes(i)) {
        target = disconnect(i, j, target);
        const aNet = count(i, target);
        const bNet = count(j, target);
        min = Math.min(min, Math.abs(aNet - bNet));
      }
    }
  }

  return min;
}

const n = 9;
const w = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

console.log(solution(n, w));
