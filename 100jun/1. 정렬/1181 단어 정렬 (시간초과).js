const read = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;

const input = read.toString().trim().split('\n');
input.shift();

function swap(arr, idx1, idx2) {
  const temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
  return arr;
}

function check(w1, w2) {
  for (let i = 0; i < w1.length; i++) {
    if (w1[i].charCodeAt() > w2[i].charCodeAt()) {
      return true;
    }
  }
  return false;
}

let words = [...new Set(input)];
let noSwaps;
let temp;
for (let i = 0; i < words.length; i++) {
  noSwaps = true;
  for (let j = 0; j < words.length - 1; j++) {
    if (words[j].length > words[j + 1].length) {
      words = swap(words, j, j + 1);
      noSwaps = false;
    } else if (words[j].length === words[j + 1].length) {
      if (check(words[j], words[j + 1])) {
        words = swap(words, j, j + 1);
        noSwaps = false;
      }
    }
  }
  if (noSwaps) break;
}

console.log(words.join('\n'));
