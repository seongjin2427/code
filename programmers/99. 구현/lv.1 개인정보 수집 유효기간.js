function solution(today, terms, privacies) {
  const answer = [];
  const [tYear, tMonth, tDay] = today.split(".").map(Number);
  const todayDate = tYear * 12 * 28 + tMonth * 28 + tDay;
  const limits = {};

  terms.forEach((t) => {
    const [term, limit] = t.split(" ");
    limits[term] = limit;
  });

  privacies.forEach((p, index) => {
    const [date, term] = p.split(" ");
    const [year, month, day] = date.split(".").map(Number);
    const registerDate =
      year * 12 * 28 + month * 28 + day - 1 + limits[term] * 28;

    if (todayDate > registerDate) answer.push(index + 1);
  });

  return answer;
}

const t = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const p = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];

console.log(solution(t, terms, p));
