function solution(elements) {
  const answer = new Set();

  for (let i = 0; i < elements.length; i++) {
    elements = [...elements.slice(1), elements.at(0)];
    for (let j = 1; j < elements.length; j++) {
      answer.add(elements.slice(j).reduce((a, b) => a + b, 0));
    }
  }

  return answer.size + 1;
}

const e = [7, 9, 1, 1, 4];
console.log(solution(e));
