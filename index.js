const read = `5`;

let input = +read.toString().trim();

let count = 665;

while (input) {
  count++;
  if (String(count).includes('666')) input--;
}
console.log(count);
