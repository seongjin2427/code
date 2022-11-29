const read = `5
55 185
58 183
88 186
60 175
46 155`;

let input = read.toString().trim().split('\n');

const T = input.shift();

const people = input.map((v) => v.split(' ').map(Number));
const rank = [];

for (let i = 0; i < T; i++) {
  let count = 0;
  for (let j = 0; j < T; j++) {
    if (i !== j) {
      if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        count++;
      }
    }
  }
  rank.push(count + 1);
}

console.log(rank.join(' '));
