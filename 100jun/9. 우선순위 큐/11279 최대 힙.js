const read = `13
0
1
2
0
0
3
2
1
0
0
0
0
0`;

const [N, ...nums] = read.toString().trim().split('\n');

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(el) {
    this.values.push(el);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let el = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (el <= parent) break;

      this.values[parentIdx] = el;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMin() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const el = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > el) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > el) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = el;
      idx = swap;
    }
  }
}

const minHeap = new MaxBinaryHeap();
const numbers = nums.map((v) => +v);

const answer = [];
for (const num of numbers) {
  if (num) {
    minHeap.insert(num);
  } else {
    answer.push(minHeap.extractMin() || 0);
  }
}

console.log(answer.join('\n'));
