const read = `4 6
101111
101010
101011
111011`;

const input = read.toString().trim().split('\n');
const [h, w] = input.shift().split(' ').map(Number);
const map = input.map((v) => v.split('').map(Number));
const stack = [[0, 0, 1]];
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// stack에 요소가 없을 때까지 무한 반복문
while (stack.length) {
  // 스택 제일 첫 부분을 빼내 디스트럭쳐링
  // x: x 거리값, y: y 거리값, distance: 이동한 거리
  const [x, y, distance] = stack.shift();

  // 상, 하, 좌, 우 4방향으로 이동이 가능하므로 i < 4
  for (let i = 0; i < 4; i++) {
    // x축으로 이동시킬 값
    const xPos = x + dir[i][0];
    // y축으로 이동시킬 값
    const yPos = y + dir[i][1];

    // index 제한
    // x와 y는 0보다 크거나 같아야 하고
    // 미로의 width, height보다는 작아야 함
    if (0 <= xPos && 0 <= yPos && xPos < w && yPos < h) {
      // 미로의 값이 1일때만 이동이 가능함
      if (map[yPos][xPos] === 1) {
        // 이동한 위치의 값이 1일 때, 이동한 횟수(거리)를 +1해 줌
        map[yPos][xPos] = distance + 1;
        // 다시 stack에 이동한 위치와 거리값을 주어 다음 이동을 시작함
        stack.push([xPos, yPos, distance + 1]);
      }
    }
  }
}

console.log(map[h - 1][w - 1]);
