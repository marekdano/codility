// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    //const node = new Node(data, this.head);
    //this.head = node;
    // simplified
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head && this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    if (index < 0) {
      throw Error("Index must be higher than 0.");
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (index < 0) {
      throw Error("Index must be higher than 0.");
    }

    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = index > 0 && this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (index < 0) {
      throw Error("Index must be higher than 0.");
    }

    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const previous = (index > 0 && this.getAt(index - 1)) || this.getLast();
    node.next = previous.next;
    previous.next = node;
  }
}
