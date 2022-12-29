const read = `F`;

const [alphabet, sign] = read.toString().trim();

const records = ['F', 'D', 'C', 'B', 'A'];
const grade = sign === '+' ? 0.3 : sign === '-' ? -0.3 : 0.0;

console.log((records.findIndex((v) => v === alphabet) + grade).toFixed(1));
