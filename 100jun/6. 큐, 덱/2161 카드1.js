const read = `7`;

const input = read.toString().trim();

const cards = Array.from({ length: input }, (_, i) => i + 1);
const answer = [];

while (cards.length > 1) {
  answer.push(cards.shift());
  cards.push(cards.shift());
}
answer.push(cards[0]);
console.log(answer.join(" "));
