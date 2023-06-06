const obj = {
  "]": "[",
  ")": "(",
  "}": "{",
};

function solution(s) {
  return s.split("").filter(() => {
    const stack = [];

    s.split("").forEach((b) =>
      stack.at(-1) === (obj[b] || null) ? stack.pop() : stack.push(b)
    );

    s = s.slice(1) + s[0];
    return !stack.length;
  }).length;
}

const s = "[](){}";
console.log(solution(s));
