function solution(fees, records) {
  const cars = {};
  const carSet = new Set();

  records.forEach((record) => {
    const [time, carNumber, state] = record.split(" ");
    if (!cars[carNumber]) cars[carNumber] = [];
    cars[carNumber].push([time, state]);
    carSet.add(carNumber);
  });

  const result = [...carSet].sort(
    (prevCar, currentCar) => prevCar - currentCar
  );

  return result.map((carNumber) => {
    let totalTime = cars[carNumber]
      .map((car) => {
        const [time, state] = car;
        const [hour, minute] = time.split(":").map(Number);
        return (hour * 60 + minute) * (state === "IN" ? -1 : 1);
      })
      .reduce((acc, cur) => acc + cur);

    if (totalTime <= 0) totalTime += 23 * 60 + 59;
    if (totalTime <= fees[0]) return fees[1];
    return fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
  });
}

const f = [180, 5000, 10, 600];
const r = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(f, r));
