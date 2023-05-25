function solution(n) {
  let index = 0;
  const regexp = /1/g;
  const nOne = n.toString(2).match(regexp).length;

  while (true) {
    const mOne = (n + ++index).toString(2).match(regexp).length;
    if (nOne === mOne) return n + index;
  }
}

const n = 15;
console.log(solution(n));
