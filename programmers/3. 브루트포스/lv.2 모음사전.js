function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];
  let count = 0;

  function check(str, n) {
    count++;
    return str.join("").slice(0, n) === word;
  }

  for (let i = 0; i < arr.length; i++) {
    const str = [arr[i]];
    if (check(str, 1)) return count;
    for (let j = 0; j < arr.length; j++) {
      str[1] = arr[j];
      if (check(str, 2)) return count;
      for (let k = 0; k < arr.length; k++) {
        str[2] = arr[k];
        if (check(str, 3)) return count;
        for (let m = 0; m < arr.length; m++) {
          str[3] = arr[m];
          if (check(str, 4)) return count;
          for (let n = 0; n < arr.length; n++) {
            str[4] = arr[n];
            if (check(str, 5)) return count;
          }
        }
      }
    }
  }
}

const w = "EIO";

console.log(solution(w));
