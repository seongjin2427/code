function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

  const arr = [];
  new_id = [...new_id]
    .filter((s) => {
      arr.push(s);
      const lastChar = arr.at(-2);
      if (lastChar === "." && lastChar === s) return;
      return true;
    })
    .join("");

  if (new_id[0] === ".") new_id = new_id.substring(1);
  if (new_id.at(-1) === ".") new_id = new_id.substring(0, new_id.length - 1);

  if (1 > new_id.length) new_id = "a";
  if (16 <= new_id.length) {
    new_id = new_id.substring(0, 15);
    if (new_id.at(-1) === ".") new_id = new_id.substring(0, new_id.length - 1);
  }

  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id.at(-1));
  }

  return new_id;
}

const n = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(n));
