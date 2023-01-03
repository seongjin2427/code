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
      // case 3-1-2
      if (value < parent.value) {
        changeNode = cNode.right;
        changeNodeParent = cNode.right;
        while (changeNode.left) {
          changeNodeParent = changeNode;
          changeNode = changeNode.left;
        }
        // cNode.right = null;
        if (changeNode.right !== null) {
          changeNodeParent.left = changeNode.right;
        } else {
          changeNodeParent.left = null;
        }
        parent.left = changeNode;
        changeNode.left = cNode.left;
        changeNode.right = cNode.right;
      } else {
        // case 3-1-2
        changeNode = cNode.right;
        changeNodeParent = cNode.right;
        while (changeNode.left) {
          changeNodeParent = changeNode;
          changeNode = changeNode.left;
        }
        if (changeNode.right !== null) {
          changeNodeParent.left = changeNode.right;
        } else {
          changeNodeParent.left = null;
        }
        parent.right = changeNode;
        changeNode.left = cNode.left;
        changeNode.right = cNode.right;
      }
    }
  }
}

const node = new Node(21);
const bst = new BST(node);
bst.insert(14);
bst.insert(11);
bst.insert(18);
bst.insert(28);
bst.insert(25);
bst.insert(32);
bst.insert(5);
bst.insert(12);
bst.insert(15);
bst.insert(19);
bst.insert(23);
bst.insert(27);
bst.insert(30);
bst.insert(37);

bst.remove(11);
console.log(bst);
console.log(bst.search(11));
