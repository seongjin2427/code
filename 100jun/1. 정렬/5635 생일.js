const read = `5
Mickey 1 10 1991
Alice 30 12 1990
Tom 15 8 1993
Jerry 18 9 1990
Garfield 20 9 1990`;

const input = read.toString().trim().split("\n");

const [n, ...people] = input;

const sorted = people
  .map((person) => person.split(" "))
  .sort((a, b) => {
    const [, aDay, aMonth, aYear] = a;
    const [, bDay, bMonth, bYear] = b;
    if (+aYear === +bYear && +aMonth === +bMonth) {
      return bDay - aDay;
    }
    if (+aYear === +bYear) {
      return bMonth - aMonth;
    }
    return bYear - +aYear;
  });

console.log(`${sorted[0][0]}\n${sorted[n - 1][0]}`);
