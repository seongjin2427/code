const read = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;

const input = read.toString().trim().split('\n');
input.shift();

let temp;

while (input.length) {
  temp = input.shift();
  const stack = [];
  let result = 'YES';

  for (const b of temp) {
    if (b === '(') stack.push(b);
    else if (b === ')') {
      if (!stack.pop()) {
        result = 'NO';
        break;
      }
    }
  }

  if (stack.length !== 0) result = 'NO';
  console.log(result);
}
