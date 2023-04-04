const read = ``;

const input = read.toString().trim();

function solution() {
  const limit = 10000;
  const arr = new Array(limit).fill(true);
  arr[0] = false;

  function notSelfNumber(n) {
    let str = n + "";
    for (let i = 0; i < str.length; i++) {
      n += +str[i];
    }
    return n;
  }

  let answer = "";

  for (let i = 1; i <= limit; i++) {
    arr[notSelfNumber(i)] = false;

    if (arr[i]) {
      answer += i + "\n";
    }
  }

  console.log(answer);
}

solution();
