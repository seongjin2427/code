const read = `5 20
4 42 40 26 46`;

const input = read.toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const trees = input[0].split(' ').map(Number);
const max = Math.max(...trees);

function binarySearch(trees, min, max) {
  let mid = 0;
  let best = 0;

  while (min <= max) {
    let sum = 0;
    mid = Math.floor((min + max) / 2);
    trees.forEach((t) => {
      const rest = t - mid;
      if (rest > 0) sum += rest;
    });

    if (sum >= M) {
      if (mid > best) best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return best;
}

const answer = binarySearch(trees, 0, max);
console.log(answer);
