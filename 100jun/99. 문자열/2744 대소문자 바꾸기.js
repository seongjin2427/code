const read = `WrongAnswer`;

const input = read.toString().trim();

const answer = [];

input.split('').forEach((s) => {
  if (s.charCodeAt() <= 90) {
    answer.push(s.toLowerCase());
  } else {
    answer.push(s.toUpperCase());
  }
});

console.log(answer.join(''));
