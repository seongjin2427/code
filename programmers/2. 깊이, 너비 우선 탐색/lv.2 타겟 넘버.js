function solution(numbers, target) {
  let count = 0;

  function recursion(sum, index) {
    if (index >= numbers.length - 1) {
      if (sum === target) count++;
      return;
    }

    index++;
    recursion(sum + numbers[index], index);
    recursion(sum - numbers[index], index);
  }

  recursion(numbers[0], 0);
  recursion(-numbers[0], 0);
  return count;
}

const n = [4, 1, 2, 1];
const t = 4;
console.log(solution(n, t));
