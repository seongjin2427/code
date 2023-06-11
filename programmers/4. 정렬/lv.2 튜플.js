function solution(s) {
  var answer = [];
  const tuple = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );

  tuple.map((t) => {
    answer.push(...t.filter((el) => !answer.includes(el)));
  });
  return answer;
}

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
console.log(solution(s));
