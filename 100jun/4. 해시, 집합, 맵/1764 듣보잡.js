const read = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`;

let [f, ...arr] = read.toString().trim().split('\n');

let [N, M] = f.split(' ').map((v) => +v);

const noListened = arr.slice(0, N);
const noSeen = arr.slice(N, N + M);

const map = new Map();
const answer = [];

noListened.forEach((nl) => map.set(nl, nl));

noSeen.forEach((ns) => (map.get(ns) ? answer.push(ns) : ''));

console.log(answer.length);
console.log(answer.sort((a, b) => a.localeCompare(b)).join('\n'));
