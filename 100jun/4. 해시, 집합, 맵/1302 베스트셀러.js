const read = `8
icecream
peanuts
peanuts
chocolate
candy
chocolate
icecream
apple
`;

const input = read.toString().trim().split("\n");

const [N, ...books] = input;

const obj = {};

books.forEach((book) => {
  obj[book] = obj[book] ? obj[book] + 1 : 1;
});

const arr = Object.entries(obj).sort(([aName, aSell], [bName, bSell]) => {
  if (aSell === bSell) return aName.localeCompare(bName);
  return bSell - aSell;
});
console.log(arr[0][0]);
