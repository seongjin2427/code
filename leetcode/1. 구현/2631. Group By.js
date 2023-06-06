/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const obj = {};

  for (let i = 0; i < this.length; i++) {
    const [value, key] = [this[i], fn(this[i])];
    obj[key] ? obj[key].push(value) : (obj[key] = [value]);
  }

  return obj;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.groupBy((n) => String(n > 5));
console.log(result);
