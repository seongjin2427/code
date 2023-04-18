const read = `7
1
257456345623453474567456
1
257456345623453474567456
1
257456345623453474567456
257456345623453474567456
257456345623453474567456`;

const input = read.toString().trim().split("\n").map(BigInt);

const [N, ...cards] = input;
let map = new Map();

for (let i = 0; i < N; i++) {
  let card = cards[i];
  let isExist = map.get(card);
  if (isExist) {
    map.set(card, isExist + 1);
  } else {
    map.set(card, 1);
  }
}

let sorted = [...map].sort((a, b) => {
  if (b[1] < a[1]) return -1;
  else if (b[1] > a[1]) return 1;
  else {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    else return 0;
  }
});

console.log(sorted[0][0].toString());
