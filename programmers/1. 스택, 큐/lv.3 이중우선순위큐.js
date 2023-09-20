function solution(operations) {
  const answer = [0, 0];
  const queue = [];
  operations.forEach((commands) => {
    const [command, number] = commands.split(" ");
    if (command === "I") queue.push(+number);
    else {
      if (number < 0) queue.shift();
      else queue.pop();
    }
    
    queue.sort((prevNumber, currentNumber) => prevNumber - currentNumber);
  });

  if (queue.length) {
    answer[0] = queue.at(-1);
    answer[1] = queue[0];
  }
  return answer;
}

const o = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];
console.log(solution(o));
