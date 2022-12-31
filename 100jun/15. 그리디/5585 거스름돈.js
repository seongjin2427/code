const read = `1`;

const input = +read.toString().trim();

let money = 1000 - input;
let count = 0;

const calculate = (m) => {
  let cash = m;
  const units = [500, 100, 50, 10, 5, 1];

  const cal = (m, u) => {
    count += Math.floor(m / u);
    cash = m % u;
  };

  units.forEach((u) => cal(cash, u));
};

calculate(money);

console.log(count);
