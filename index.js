const read = `10
1 1 2 1 2 2 2 2 1 1`;

const [N, n] = read.toString().trim().split('\n');

function solution(N, n) {
  const statues = n.split(' ').map((v) => +v);
  console.log(statues);

  const result = [0, 0, 0];
  let temp = statues[0];
  for (let i = 1; i < N; i++) {
    if (temp === statues[i]) result[statues[i]]++;
    else if (temp !== statues[i] && statues[i] === statues[i + 1]) {
      result[statues[i]]++;
    }
    temp = statues[i];
  }

  console.log(result);
}

solution(N, n);
