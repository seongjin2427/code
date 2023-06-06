/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  const arr = [0, 1];
  yield arr[0];
  yield arr[1];

  for (let i = 2; ; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    yield arr[i];
  }
};

const gen = fibGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
