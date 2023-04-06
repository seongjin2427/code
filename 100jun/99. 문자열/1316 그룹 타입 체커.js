const read = `3
happy
new
year`;

const [N, ...words] = read.toString().trim().split("\n");

function solution(word) {
  const letters = [];
  const arr = word.split("");

  for (let i = 0; i < arr.length; i++) {
    if (!letters.includes(arr[i])) letters.push(arr[i]);
    else if (letters[letters.length - 1] !== arr[i]) return 0;
  }

  return 1;
}

let answer = 0;
words.forEach((word) => {
  answer += solution(word);
});

console.log(answer);
