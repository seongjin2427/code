const read = `baaa`;

const input = read.toString().trim().toUpperCase().split('');

const s = {};
input.forEach((i) => (s[i] = s[i] + 1 || 1));
const max = Math.max(...Object.values(s));
const entry = Object.entries(s).filter(([k, v]) => v === max);
console.log(entry.length > 1 ? '?' : entry[0][0]);
