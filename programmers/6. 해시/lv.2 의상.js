function solution(clothes) {
  let answer = 1;
  const obj = {};

  clothes.forEach((v) => (obj[v[1]] = (obj[v[1]] || 0) + 1));
  for (let v in obj) answer *= obj[v] + 1;

  return answer - 1;
}

const c = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(c));
