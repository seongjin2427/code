const read = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;

const input = read.toString().trim().split("\n");

function solution(input) {
  const [C, ...cases] = input;

  cases.forEach((c) => {
    const [N, ...scores] = c.split(" ").map(Number);
    let students = 0;
    const avg = scores.reduce((a, b) => a + b, 0) / N;

    scores.forEach((score) => (score > avg ? students++ : null));
    console.log(((students / N) * 100).toFixed(3) + "%");
  });
}

solution(input);
