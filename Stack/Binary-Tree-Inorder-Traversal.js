//Day18#100DaysOfChallenge
/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

 function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(val) {
//     if (!val) throw new Error('Provide a valid input');
//     this.items.unshift(val);
//   }

//   dequeue() {
//     if (this.items.length === 0) throw new Error('No items to dequeue');

//     return this.items.dequeue();
//   }

//   size() {
//     return this.items.length;
//   }

//   front() {
//     return this.items[0];
//   }
// }

class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    if (this.items.length === 0) throw new Error('Stack Empty');

    return this.items.pop();
  }

  push(val) {
    this.items.push(val);
  }

  top() {
    return this.items[this.items.length - 1];
  }

  empty() {
    return this.items.length === 0;
  }
}

const root = new TreeNode(1);
const rootsRight = new TreeNode(2);
root.right = rootsRight;
rootsRight.left = new TreeNode(3);

const inorderTraversal = function (root) {
  const res = [];
  let curr = root;
  const stack = new Stack();
  while (!curr || !stack.empty()) {
    while (!curr) {
      stack.push(curr.left);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
};

inorderTraversal(root);
