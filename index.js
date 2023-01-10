const read = `3
26 40 83
49 60 57
13 89 99`;

const [n, ...houses] = read.toString().trim().split('\n');

console.log(n, houses)