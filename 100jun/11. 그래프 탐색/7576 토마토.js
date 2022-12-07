const read = `6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`;

const [n, ...tomatoes] = read.toString().trim().split('\n');
const [M, N] = n.split(' ').map((v) => +v);
const box = tomatoes.map((tomato) => tomato.split(' ').map((t) => +t));

class Node {
  constructor(x, y, count = -1) {
    this.x = x;
    this.y = y;
    this.count = count;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  shift() {
    if (!this.size) return null;
    const node = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.size--;
    return node;
  }
}

const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];

const queue = new Queue();
let output = 0;
let zeroCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push(new Node(j, i, 0));
    } else if (box[i][j] === 0) {
      zeroCount++;
    }
  }
}

while (queue.size) {
  const { x, y, count } = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (box?.[ny]?.[nx] === 0) {
      queue.push(new Node(nx, ny, count + 1));
      zeroCount--;
      box[ny][nx] = 1;
      output = Math.max(output, count + 1);
    }
  }
}

console.log(zeroCount ? -1 : output);
