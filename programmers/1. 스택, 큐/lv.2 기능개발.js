// function solution(progresses, speeds) {
//   const deploy = [];

//   while (progresses.length) {
//     for (let i = 0; i < progresses.length; i++) {
//       progresses[i] += speeds[i];
//     }

//     const arr = [];
//     let index = 0;
//     while (true) {
//       if (progresses[index] >= 100) {
//         arr.push(progresses.shift());
//         speeds.shift();
//         continue;
//       }
//       break;
//     }

//     if (arr.length) deploy.push(arr.length);
//   }
//   return deploy;
// }
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

const p = [93, 30, 55];
const s = [1, 30, 5];

console.log(solution(p, s));
