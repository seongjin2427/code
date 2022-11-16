const read = `2
1 2 3
3 2 4`;

const input = read.toString().trim().split('\n');

const T = +input.shift();

function solution(inputs) {
  const numbers = inputs.split(' ').map(Number);

  const arr = [];
  numbers.forEach((n) => {
    let temp = [];
    for (let i = 1; i <= n; i++) temp.push(i);
    arr.push(temp);
  });

  const [a, b, c] = arr;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        const ab = a[i] % b[j];
        const bc = b[j] % c[k];
        const ca = c[k] % a[i];
        if (ab === bc && bc === ca && ca === ab) count++;
      }
    }
  }
  console.log(count);
}

input.forEach((i) => {
  solution(i);
});
