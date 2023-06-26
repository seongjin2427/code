function solution(record) {
  const users = {};
  const result = [];

  record.forEach((user) => {
    const [command, userId, nickname] = user.split(" ");
    if (command !== "Leave") users[userId] = nickname;
  });

  record.forEach((user) => {
    const [command, userId] = user.split(" ");
    const nickname = users[userId];
    if (command === "Enter") result.push(`${nickname}님이 들어왔습니다.`);
    if (command === "Leave") result.push(`${nickname}님이 나갔습니다.`);
  });

  return result;
}

const r = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(r));
