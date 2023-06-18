function solution(str1, str2) {
  const regexp = /^[a-z]+$/;
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const target = (str1[i] + str1[i + 1]).toLowerCase();
    if (regexp.test(target)) arr1.push(target);
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const target = (str2[i] + str2[i + 1]).toLowerCase();
    if (regexp.test(target)) arr2.push(target);
  }

  let intersection = 0;
  const temp = [];

  for (const str of arr1) {
    if (!temp.includes(str)) {
      const min1 = arr1.filter((el) => el === str).length;
      const min2 = arr2.filter((el) => el === str).length;
      intersection += Math.min(min1, min2);
      temp.push(str);
    }
  }

  const NUMBER = 65536;
  const union = arr1.length + arr2.length - intersection;
  if (intersection === 0 && union === 0) return NUMBER;
  return parseInt((intersection / union) * NUMBER);
}

const s1 = "aa";
const s2 = "";

console.log(solution(s1, s2));
