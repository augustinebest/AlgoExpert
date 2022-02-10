class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor() {
    this.result = [];
  }
  printAll(head) {
    let current = head;
    while (current !== null) {
      this.result.push(current.val);
      current = current.next;
    }
    return this.result;
  }

  // Recursive Way
  printAllRecursive(head) {
    if (head === null) return;
    this.result.push(head.val);
    this.printAllRecursive(head.next);
    return this.result;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
a.next = b;
b.next = c;
c.next = d;

const list = new List();
console.log(list.printAllRecursive(a));
