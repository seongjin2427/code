const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
};

const arr = [8, 3, 9, 2, 3, 1];
const result = insertionSort(arr);

console.log(result);
