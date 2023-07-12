function solution(order) {
  const stack = [];
  const copiedOrder = [...order].reverse();
  const boxes = Array.from(
    { length: order.length },
    (_, i) => order.length - i
  );
  let truck = 0;

  while (boxes.length) {
    const target = boxes.pop();

    if (target === copiedOrder.at(-1)) {
      copiedOrder.pop();
      truck++;
    } else {
      stack.push(target);
    }

    while (stack.length && stack.at(-1) === copiedOrder.at(-1)) {
      stack.pop();
      copiedOrder.pop();
      truck++;
    }
  }

  return truck;
}

const o = [5, 4, 3, 2, 1];

console.log(solution(o));
