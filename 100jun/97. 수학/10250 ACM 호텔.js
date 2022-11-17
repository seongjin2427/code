const read = `2
10 99 101
30 50 72`;

const input = read.toString().trim().split('\n');
input.shift();

input.forEach((i) => {
  const [H, W, N] = i.split(' ').map(Number);
  const room = Math.ceil(N / H);
  const stair = N % H || H;
  if (room >= 10) {
    console.log(`${stair}${room}`);
  } else {
    console.log(`${stair}0${room}`);
  }
});
