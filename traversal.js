class Tree {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  insert(value = null) {
    if (!Number.isInteger(value)) {
      return "please insert values like integer ex - 2,3,4,5,";
    }

    const currentNode = this.root;

    if (!currentNode) {
      const newNode = new Tree(value);
      this.root = newNode;
    } else {
      function traverseAndAddNode(node) {
        if (node.value < value) {
          if (!node.right) {
            return (node.right = new Tree(value));
          } else {
            return traverseAndAddNode(node.right);
          }
        } else {
          if (!node.left) {
            return (node.left = new Tree(value));
          } else {
            return traverseAndAddNode(node.left);
          }
        }
      }
      traverseAndAddNode(this.root);
    }

    return this.root;
  }

  preorderRecursive() {
    let node = this.root
    function pre(node) {
      if (node == null)
        return;

      console.log(node.value)
      pre(node.left)
      pre(node.right)
    }
    pre(node)
  }

  inorderRecursive() {
    let node = this.root
    function inOrder(node) {
      if (node == null)
        return;

      inOrder(node.left)
      console.log(node)
      inOrder(node.right)
    }
    inOrder(node)
  }

  postorderRecursive() {
    let node = this.root
    function postOrder(node) {
      if (node == null)
        return;

      postOrder(node.left)
      postOrder(node.right)
      console.log(node)
    }
    postOrder(node)
  }

  preorderItirative() {
    let stack = [this.root]
    while (stack.length > 0) {
      let node = stack.pop()
      console.log(node)
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  inOrderItirative() {
    let stack = []
    let curr = this.root;
    while (curr || stack.length > 0) {
      if (curr) {
        stack.push(curr)
        curr = curr.left
      }
      else {
        curr = stack.pop()
        console.log(curr.value)
        curr = curr.right
      }
    }
  }


}

const tree = new bst();
tree.insert(15);
tree.insert(7);
tree.insert(10);
tree.insert(8);
tree.insert(21);
tree.insert(2);
tree.insert(22);
tree.insert(6);
tree.insert(28);
tree.preorderRecursive()
//console.log(tree)