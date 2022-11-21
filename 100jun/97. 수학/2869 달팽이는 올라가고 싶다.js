const read = `100 99 1000000000`;

let [A, B, V] = read.toString().trim().split(' ');

console.log(Math.ceil((V - B) / (A - B)));
