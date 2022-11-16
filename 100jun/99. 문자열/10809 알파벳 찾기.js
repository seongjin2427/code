const read = `baekjoon`;

const input = read.toString().trim();

const check = input.split('').map((i) => i.charCodeAt());
for (let i = 97; i <= 122; i++) {
  if (check.includes(i)) {
    console.log(check.indexOf(i));
    continue;
  }
  console.log(-1);
}
