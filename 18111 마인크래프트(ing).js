const read = `3 4 1
64 64 64 64
64 64 64 64
64 64 63 63`;

const input = read.toString().trim().split('\n');

const [N, M, B] = input.shift().split(' ').map(Number);

let ground = input.map((i) => i.split(' ').map(Number));

console.log(N, M, B);
console.log(ground);
solution(ground, B);

function solution(g, B) {
  let time = 0;
  let goalHeight;
  let heightCount = new Map();
  let inventory = B;

  g.flat(1).forEach((h) => heightCount.set(h, heightCount.get(h) + 1 || 1));
  heightCount = [...heightCount].sort((a, b) => b[1] - a[1]);
  goalHeight =
    inventory > 0 ? heightCount[0][0] : heightCount[heightCount.length - 1][0];
  console.log('goalHeight', goalHeight);

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      const currentBlock = g[i][j];
      console.log(currentBlock);
      if (inventory > 0 && currentBlock < goalHeight) putBlock(g, i, j);
      else if (currentBlock > goalHeight) removeBlock(g, i, j);
    }
  }

  function removeBlock(g, i, j) {
    g[i][j]--;
    time += 2;
    inventory++;
  }

  function putBlock(g, i, j) {
    g[i][j]++;
    time += 1;
    inventory--;
  }
  console.log(ground);
  console.log('time', time);
  console.log(time, goalHeight);
}
