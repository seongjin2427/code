const read = `10 50`;

const [H, M] = read.toString().trim().split(' ').map(Number);

const hour = H === 0 && M - 45 < 0 ? 23 : M - 45 < 0 ? H - 1 : H;
const minutes = M - 45 < 0 ? 60 + M - 45 : M - 45;
console.log(`${hour} ${minutes}`);
