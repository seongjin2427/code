function solution(wallpaper) {
  const lux = [];
  const luy = [];
  const rux = [];
  const ruy = [];

  wallpaper.forEach((y, index1) => {
    y.split("").forEach((x, index2) => {
      if (x !== ".") {
        lux.push(index1);
        luy.push(index2);
        rux.push(index1 + 1);
        ruy.push(index2 + 1);
      }
    });
  });

  return [
    Math.min(...lux),
    Math.min(...luy),
    Math.max(...rux),
    Math.max(...ruy),
  ];
}

const w = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];

console.log(solution(w));
