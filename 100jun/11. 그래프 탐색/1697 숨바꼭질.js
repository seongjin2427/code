const read = `5 17`;

const [n, k] = read.toString().trim().split(" ").map(Number);

let map = new Array(100001).fill(0);

function bfs() {
  let count = 0;
  const queue = [n];
  map[n] = 1;

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      if (cur === k) return count;

      for (let next of [cur + 1, cur - 1, cur * 2]) {
        if (next >= 0 && next <= 100000 && map[next] === 0) {
          map[next] = 1;
          queue.push(next);
        }
      }
    }

    count++;
  }
}

console.log(bfs());
