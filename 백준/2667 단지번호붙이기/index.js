const read = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`;

const input = read.toString().trim().split('\n');

const size = +input.shift();
const map = input.map((i) => i.split('').map(Number));

// 초기 수도 코드
// cur이 0이면 return;
// x, y가 0 미만이거나 size - 1 초과인 경우 return;
// 상하좌우에 집이 있으면 count를 올리면서 계속 visited++를 시켜주고
// 없으면 count를 배열에 추가하고 다음 순회로 넘어감

// 단지 개수 저장할 변수
const homes = [];
// 상하좌우 좌표
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 단지 개수를 카운팅할 변수
let count = 0;

// dfs 함수
function dfs(x, y) {
  // map 범위 안에서만 실행하기
  if (rangeCheck(x, y) && map[y][x] === 1) {
    // 방문한 곳인지 체크
    map[y][x] = 0;
    // 단지 갯수 세기
    count++;

    // dfs 재귀함수로 상하좌우 살피기
    for (let i = 0; i < dx.length; i++) {
      dfs(x + dx[i], y + dy[i]);
    }
  }
}

// map 범위내인지 체크하기
function rangeCheck(x, y) {
  if (0 <= x && 0 <= y && x < size && y < size) return true;
  else return false;
}

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (map[i][j] === 1) {
      // dfs를 한번 다 돌면 한 단지의 집 개수가 count로 나오게됨
      dfs(j, i);
      // 그 집 개수를 homes에 넣고
      homes.push(count);
      // 0으로 초기화 시키기
      count = 0;
    }
  }
}

console.log(homes.length);
homes.sort((a, b) => a - b);
homes.forEach((h) => console.log(h));
