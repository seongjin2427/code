const read = `4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]`;

const [T, ...inputs] = read.toString().trim().split('\n');
// console.log(T, inputs);

for (let i = 0; i < T; i++) {
  let [cmd, n, arr] = inputs.splice(0, 3);
  if (+n) {
    arr = arr.split('');
    arr.pop();
    arr.shift();
    arr = arr.join('').split(',').map(Number);
  } else {
    arr = [];
  }
  executeAC(cmd, arr);
}

function executeAC(command, arr) {
  let isReverse = false;
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'R') {
      isReverse = !isReverse;
    }
    if (command[i] === 'D') {
      if (arr.length < 1) {
        console.log('error');
        return;
      }
      if (isReverse) {
        arr.pop();
      } else {
        arr = arr.splice(1);
      }
    }
  }
  if (isReverse) {
    console.log(`[${arr.reverse().join()}]`);
  } else {
    console.log(`[${arr.join()}]`);
  }
}
