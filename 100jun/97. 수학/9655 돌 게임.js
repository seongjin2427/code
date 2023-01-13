const read = `5`;

const input = read.toString().trim();

let stone = +input;

console.log(stone % 2 === 0 ? 'CY' : 'SK');
