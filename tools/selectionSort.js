const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
};

const arr = [6, 2, 9, 5, 4];
const result = selectionSort(arr);
console.log(result);
