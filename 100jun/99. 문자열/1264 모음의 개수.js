const read = `How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#`;

const input = read.toString().trim().split('\n');
input.pop();

const moum = ['a', 'e', 'i', 'o', 'u'];

input.forEach((str) => {
  let count = 0;
  str
    .toLowerCase()
    .split('')
    .forEach((s) => {
      if (moum.includes(s)) count++;
    });
  console.log(count);
});
