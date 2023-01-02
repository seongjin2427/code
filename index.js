class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(head) {
    this.head = head;
  }
  insert(value) {
    let cNode = this.head;
    while (true) {
      if (value < cNode.value) {
        if (cNode.left !== null) {
          cNode = cNode.left;
        } else {
          cNode.left = new Node(value);
          break;
        }
      } else {
        if (cNode.right !== null) {
          cNode = cNode.right;
        } else {
          cNode.right = new Node(value);
          break;
        }
      }
    }
  }
  search(value) {
    let cNode = this.head;
    while (cNode) {
      if (cNode.value === value) {
        return true;
      } else if (value < cNode.value) {
        cNode = cNode.left;
      } else {
        cNode = cNode.right;
      }
    }
    return false;
  }
  remove(value) {
    let searched = false;
    let cNode = this.head;
    let parent = this.head;
    while (cNode) {
      if (cNode.value === value) {
        searched = true;
        break;
      } else if (value < cNode.value) {
        parent = cNode;
        cNode = cNode.left;
      } else {
        parent = cNode;
        cNode = cNode.right;
      }
    }

    if (!searched) {
      return false;
    }

    // cNode가 삭제할 Node, parent는 삭제할 Node의 Parent Node인 상태
    if (cNode.left === null && cNode.right === null) {
      if (value < parent.value) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      cNode = null;
    }

    if (cNode.left !== null && cNode.right === null) {
      if (value < parent.value) {
        parent.left = cNode.left;
      } else {
        parent.right = cNode.left;
      }
    } else if (cNode.left === null && cNode.right !== null) {
      if (value < parent.value) {
        parent.left = cNode.right;
      } else {
        parent.right = cNode.right;
      }
    }

    let changeNodeParent;
    let changeNode;
    // case 3
    if (cNode.left !== null && cNode.right !== null) {
      // case 3-1
      if (value < parent.value) {
        changeNode = cNode.right;
        changeNodeParent = cNode.right;
        while (cNode.left) {
          changeNodeParent = changeNode;
          changeNode = changeNode.left;
        }
        if (changeNode.right !== null) {
          changeNodeParent.left = changeNode.right;
        } else {
          changeNodeParent.left = null;
        }
      } else {
      }
    }
  }
}

const node = new Node(50);
const bst = new BST(node);
bst.insert(20);
bst.insert(100);
bst.insert(30);
console.log(bst.search(100));
console.log(bst);
