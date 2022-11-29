const read = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;

let input = read.toString().trim().split('\n');

input.shift();
let people = input.map((v) => v.split(' '));

const answer = people.sort((a, b) => a[0] - b[0]);
answer.forEach((a) => console.log(a.join(' ')));
