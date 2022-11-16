const read = `5
AAA
ABBA
ABABA
ABCA
PALINDROME`;

const input = read.toString().trim().split('\n');
input.shift();

let count = 0;

function recursion(s, l, r) {
  count++;
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

input.forEach((i) => {
  count = 0;
  console.log(isPalindrome(i), count);
});
