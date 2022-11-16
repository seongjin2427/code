const read = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;

const input = read.toString().trim().split('\n');
input.pop();

const brackets = '()[]';
let stack = [];
const answer = input.map((str) => {
  stack = [];
  for (const s of str) {
    if (!brackets.includes(s)) continue;
    if (s === '(' || s === '[') stack.push(s);
    else if (s === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') return 'no';
      stack.pop();
    } else if (s === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') return 'no';
      stack.pop();
    }
  }
  if (stack.length !== 0) return 'no';
  return 'yes';
});

console.log(answer.join('\n'));
// console.log(input);
