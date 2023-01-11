function split(arr) {
  if (arr.length <= 1) return arr;

  const center = arr.length / 2;
  const left = split(arr.slice(0, center));
  const right = split(arr.slice(center));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let lp = 0;
  let rp = 0;

  while (left.length > lp && right.length > rp) {
    if (left[lp] > right[rp]) {
      merged.push(right[rp]);
      rp++;
    } else {
      merged.push(left[lp]);
      lp++;
    }
  }

  while (left.length > lp) {
    merged.push(left[lp]);
    lp++;
  }

  while (right.length > rp) {
    merged.push(right[rp]);
    rp++;
  }

  return merged;
}

const array = [1, 7, 4, 3, 9, 6];
console.log(split(array));
