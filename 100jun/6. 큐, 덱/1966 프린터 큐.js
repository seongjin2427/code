const read = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;

let [N, ...inputs] = read.toString().trim().split('\n');

let answer = [];

for (let i = 0; i < N; i++) {
  const queue = [];
  let count = 0;
  const [N, M] = inputs.shift().split(' ').map(Number);
  inputs
    .shift()
    .split(' ')
    .forEach((v, i) => queue.push([v, i === M ? true : false]));

  while (queue.length) {
    let cur = queue.shift();
    if (queue.some((v) => cur[0] < v[0])) {
      queue.push(cur);
      continue;
    }
    count++;
    if (cur[1]) {
      answer.push(count);
      break;
    }
  }
}

console.log(answer.join('\n'));
