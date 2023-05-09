function solution(cards1, cards2, goal) {
  let result = "Yes";
  const copyGoal = [...goal];

  for (let i = 0; i < goal.length; i++) {
    const target = copyGoal.shift();
    const card1Target = cards1.shift();
    const card2Target = cards2.shift();

    if (target !== card1Target) {
      cards1.unshift(card1Target);

      if (target !== card2Target) {
        cards2.unshift(card2Target);
        result = "No";
        return result;
      }
    } else {
      cards2.unshift(card2Target);
    }
  }

  return result;
}

const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));
