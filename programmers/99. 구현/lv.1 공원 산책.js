function solution(park, routes) {
  let [y, x] = [0, 0];

  for (let i = 0; i < park.length; i++) {
    const index = park[i].indexOf("S");
    if (index > -1) {
      [y, x] = [i, index];
      break;
    }
  }

  const direction = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  routes.forEach((route) => {
    const [d, move] = route.split(" ");
    const moving = direction[d];

    for (let i = 1; i <= move; i++) {
      const [dy, dx] = [y + moving[0] * i, x + moving[1] * i];
      if (!park[dy] || !park[dy][dx] || park[dy][dx] === "X") return;
    }
    [y, x] = [y + moving[0] * move, x + moving[1] * move];
  });

  return [y, x];
}

const p = ["OOS", "OOX", "OOO"];
const r = ["E 2", "S 2", "W 1"];

console.log(solution(p, r));
