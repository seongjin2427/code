const read = `14 30
20`;

const [time, C] = read.toString().trim().split('\n');

const current = time.split(' ').map(Number);

const currentHour = current[0];
const currentMinute = current[1];
const cookTime = Number(C);

const cookEndTimeHour = parseInt(
  (currentHour * 60 + currentMinute + cookTime) / 60,
);
const cookEndTimeMinute = parseInt(
  (currentHour * 60 + currentMinute + cookTime) % 60,
);

console.log(
  cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour,
  cookEndTimeMinute,
);
