const read = `a a a a a
a a`;

const input = read.toString().trim().trim().split("\n");

const [book, target] = input;
let count = 0;
const targetLength = target.length;

for (let i = 0; i < book.length; i++) {
  const compare = book.slice(i, i + targetLength);
  if (compare.length === targetLength && compare === target) {
    count++;
  }
}

console.log(parseInt(count / 2));

