const read = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`;

const [n, ...input] = read.toString().trim().split('\n');

function solution(arr) {
  let answer = [];
  let obj = {};

  function getAnswer(c) {
    let sum = 1;
    const test = c.shift();
    const cloth = c.splice(0, test);

    for (let i = 0; i < cloth.length; i++) {
      const [_, kind] = cloth[i].split(' ');
      obj[kind] = obj[kind] ? obj[kind] + 1 : 1;
    }

    for (const key in obj) sum *= obj[key] + 1;
    answer.push(sum ? sum - 1 : 0);

    obj = {};

    if (c.length > 0) {
      return getAnswer(arr);
    } else {
      return;
    }
  }
  getAnswer(arr);

  return answer.join('\n');
}

const result = solution(input);
console.log(result);
