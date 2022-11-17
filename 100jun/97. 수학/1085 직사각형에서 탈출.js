const read = `653 375 1000 1000`;

const [x, y, w, h] = read.toString().trim().split(' ').map(Number);
const a = Math.abs(w - x);
const b = Math.abs(h - y);
const c = x;
const d = y;
console.log(Math.min(a, b, c, d));
