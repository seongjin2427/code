const read = `3
ABAB
AABB
ABBA`;

const input = read.toString().trim().trim().split("\n");

const [N, ...words] = input;
let count = 0;

console.log(N, words);
for (const word of words) {
  const stack = [];
  for (const letter of word) {
    console.log(word, stack);
    if (stack.length && stack[stack.length - 1] === letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  console.log("---------------–––-----------");
  console.log(stack);
  console.log("---------------–––-----------");
  if (stack.length === 0) count++;
}

console.log(count);
