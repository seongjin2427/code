function solution(survey, choices) {
  const obj = {};
  const arr = ["RT", "FC", "MJ", "AN"];
  const scores = [0, 3, 2, 1, 0, 1, 2, 3];

  survey.forEach((s, index) => {
    const [first, second] = s.split("");
    const choice = choices[index];
    const score = scores[choice];

    if (choice <= 3) obj[first] = obj[first] + score || score;
    if (5 <= choice) obj[second] = obj[second] + score || score;
  });

  return arr
    .map((a) => {
      const [first, second] = a.split("");
      const [firstScore, secondScore] = [first, second].map((n) => obj[n] ?? 0);
      if (firstScore === secondScore) return first < second ? first : second;
      return firstScore > secondScore ? first : second;
    })
    .join("");
}

const s = ["TR", "RT", "TR"];
const c = [7, 1, 3];

console.log(solution(s, c));
