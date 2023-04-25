const read = `11 10
9785409507
2055103694
0861396761
3073207669
1233049493
2300248968
9769239548
7984130001
1670020095
8894239889
4053971072`;

const input = read.toString().trim().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

function solution(N, M, arr) {
  let len = Math.min(N, M);

  while (len > 1) {
    for (let i = 0; i <= N - len; i++) {
      for (let j = 0; j <= M - len; j++) {
        let num = arr[i][j];
        // 꼭짓점 3군데 비교
        if (
          num == arr[i][j + len - 1] &&
          num == arr[i + len - 1][j] &&
          num == arr[i + len - 1][j + len - 1]
        ) {
          console.log(len * len);
          return;
        }
      }
    }
    len--;
  }
}

solution(N, M, input);
