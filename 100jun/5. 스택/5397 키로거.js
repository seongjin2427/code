const read = `2
<<BP<A>>Cd-
ThIsIsS3Cr3t`;

const [n, ...keyLog] = read.toString().trim().split('\n');

function solution(str) {
  const left = [];
  const right = [];

  for (const s of str) {
    if (s === '-') left.pop();
    else if (s === '<') {
      if (left.length) right.push(left.pop());
    } else if (s === '>') {
      if (right.length) left.push(right.pop());
    } else {
      left.push(s);
    }
  }
  console.log([...left, ...right.reverse()].join(''));
}

keyLog.forEach(solution);
