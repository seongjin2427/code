function solution(ingredient) {
  let answer = 0;
  const container = [];
  const standard = [1, 2, 3, 1];

  ingredient.forEach((i) => {
    container.push(i);
    const target = container.slice(container.length - 4);

    if (standard.every((s, idx) => target[idx] === s)) {
      container.length = container.length - 4;
      answer++;
    }
  });

  return answer;
}

const i = [1, 3, 2, 1, 2, 1, 3, 1, 2];

console.log(solution(i));
