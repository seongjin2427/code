const read = `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`;

const [M, ...cases] = read.toString().trim().split('\n');

const S = new Set();

cases.forEach((c) => {
  const [command, value] = c.split(' ');

  if (command === 'add') {
    S.add(value);
  }
  if (command === 'remove') {
    S.delete(value);
  }
  if (command === 'check') {
    console.log(S.has(value) ? 1 : 0);
  }
  if (command === 'toggle') {
    S.has(value) ? S.delete(value) : S.add(value);
  }
  if (command === 'all') {
    S.clear();
    for (let i = 1; i <= 20; i++) S.add(i);
  }
  if (command === 'empty') {
    S.clear();
  }
});
