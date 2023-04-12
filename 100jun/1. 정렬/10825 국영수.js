const read = `12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`;

const input = read
  .toString()
  .trim()
  .split("\n")
  .map((student) => student.split(" "));

const [N, ...students] = input;

const sorted = students.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    return a[0].charCodeAt() - b[0].charCodeAt();
  }

  if (a[1] === b[1] && a[2] === b[2]) {
    return b[3] - a[3];
  }

  if (a[1] === b[1]) {
    return a[2] - b[2];
  }

  return b[1] - a[1];
});

console.log(sorted.map(([name]) => name).join("\n"));
