const read = `3
this is a test
foobar
all your base`;

const input = read.toString().trim().split('\n');

const length = +input.shift();

input.forEach((i, idx) => {
  const str = i.split(' ').reverse().join(' ');
  console.log(`Case #${idx + 1}: ${str}`);
});
