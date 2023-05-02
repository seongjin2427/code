function solution(N, stages) {
  const stageResult = new Array(N + 1).fill(0);
  let users = stages.length;
  const failRatio = [];

  stages.forEach((stage) => stageResult[stage - 1]++);

  for (let i = 0; i < stageResult.length - 1; i++) {
    const current = stageResult[i];
    failRatio.push([i + 1, current / users]);
    users -= current;
  }

  return failRatio.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
}

const N = 4;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
