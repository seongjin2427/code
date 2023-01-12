function binarySearch(data, search) {
  if (data.length === 1 && search === data[0]) return true;
  if (data.length === 1 && search !== data[0]) return false;
  if (data.length === 0) return false;

  const center = Math.floor(data.length / 2);

  if (search === data[center]) {
    return true;
  } else {
    if (search > data[center]) return binarySearch(data.slice(center), search);
    else return binarySearch(data.slice(0, center), search);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = binarySearch(arr, 5);
console.log(result);
