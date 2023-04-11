const read = `4
Baha enter
Askar enter
Baha leave
Artem enter`;

const input = read.toString().trim().split("\n");

const [n, ...people] = input;

const checker = {};
people.forEach((p) => {
  const [person, status] = p.split(" ");
  if (status === "leave") return delete checker[person];
  checker[person] = status;
});

console.log(Object.keys(checker).sort().reverse().join("\n"));
