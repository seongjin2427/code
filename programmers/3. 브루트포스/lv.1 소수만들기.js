function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let sum = 0;
  const arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        arr.push(sum);
      }
    }
  }

  const result = arr.filter((num) => isPrime(num));
  return result.length;
}

const nums = [1, 2, 7, 6, 4];
console.log(solution(nums));
