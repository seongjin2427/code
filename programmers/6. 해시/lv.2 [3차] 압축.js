function solution(msg) {
  const answer = [];
  const dictionary = {};

  for (let i = 1; i < 27; i++) {
    dictionary[String.fromCharCode(i + 64)] = i;
  }

  let index = 27;
  for (let i = 0; i < msg.length; i++) {
    for (let j = msg.length; j > i; j--) {
      const target = msg.slice(i, j);

      if (Object.keys(dictionary).includes(target)) {
        answer.push(dictionary[target]);
        dictionary[target + msg[j]] = index++;
        i += target.length - 1;
        break;
      }
    }
  }

  return answer;
}

const m = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(m));
