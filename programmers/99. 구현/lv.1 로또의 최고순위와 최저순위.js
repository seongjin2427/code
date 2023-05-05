function solution(lottos, win_nums) {
  const matchTable = [6, 6, 5, 4, 3, 2, 1];
  const match = win_nums.filter((w) => lottos.includes(w)).length;
  const none = lottos.filter((v) => !v).length;

  const max = none === 6 ? 1 : matchTable[match + none];
  const min = matchTable[match];

  return [max, min];
}

const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos, win_nums));
