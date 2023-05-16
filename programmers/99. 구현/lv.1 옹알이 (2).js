const arr = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  return babbling.filter((b) => {
    for (let i = 0; i < arr.length; i++) {
      b = b.replaceAll(arr[i], i);
    }

    if (Number.isNaN(+b)) return;

    for (let i = 0; i < b.length - 1; i++) {
      if (b[i] === b[i + 1]) return;
    }

    return true;
  }).length;
}

const b = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

console.log(solution(b));
