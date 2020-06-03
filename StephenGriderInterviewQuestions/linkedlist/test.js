import { LinkedList as List, Node } from "./"

test("List is a class", () => {
  expect(typeof List.prototype.constructor).toEqual("function");
});

test("Node is a class", () => {
  expect(typeof Node.prototype.constructor).toEqual("function");
});

describe("A Node", () => {
  test('has properties "data" and "next"', () => {
    const node = new Node("a", "b");
    expect(node.data).toEqual("a");
    expect(node.next).toEqual("b");
  });
});

describe("Insert First", () => {
  test("appends a node to the start of the list", () => {
    const list = new List();
    list.insertFirst(1);
    expect(list.head.data).toEqual(1);
    list.insertFirst(2);
    expect(list.head.data).toEqual(2);
  });
});

describe("Size", () => {
  test("returns the number of items in the linked list", () => {
    const list = new List();
    expect(list.size()).toEqual(0);
    list.insertFirst(1);
    list.insertFirst(1);
    list.insertFirst(1);
    list.insertFirst(1);
    expect(list.size()).toEqual(4);
  });
});

describe("GetFirst", () => {
  test("returns the first element", () => {
    const list = new List();
    list.insertFirst(1);
    expect(list.getFirst().data).toEqual(1);
    list.insertFirst(2);
    expect(list.getFirst().data).toEqual(2);
  });
});

describe("GetLast", () => {
  test("returns the last element", () => {
    const list = new List();
    list.insertFirst(2);
    expect(list.getLast()).toEqual({ data: 2, next: null });
    list.insertFirst(1);
    expect(list.getLast()).toEqual({ data: 2, next: null });
  });
});

describe("GetLast when head is null", () => {
  test("returns the last element", () => {
    const list = new List();
    expect(list.getLast()).toEqual(null);
  });
});

describe("Clear", () => {
  test("empties out the list", () => {
    const list = new List();
    expect(list.size()).toEqual(0);
    list.insertFirst(1);
    list.insertFirst(1);
    list.insertFirst(1);
    list.insertFirst(1);
    expect(list.size()).toEqual(4);
    list.clear();
    expect(list.size()).toEqual(0);
  });
});

describe("RemoveFirst", () => {
  test("removes the first node when the list has a size of zero", () => {
    const list = new List();
    list.removeFirst();
    expect(list.size()).toEqual(0);
    expect(list.getFirst()).toEqual(null);
  });

  test("removes the first node when the list has a size of one", () => {
    const list = new List();
    list.insertFirst("a");
    list.removeFirst();
    expect(list.size()).toEqual(0);
    expect(list.getFirst()).toEqual(null);
  });

  test("removes the first node when the list has a size of three", () => {
    const list = new List();
    list.insertFirst("c");
    list.insertFirst("b");
    list.insertFirst("a");
    list.removeFirst();
    expect(list.size()).toEqual(2);
    expect(list.getFirst().data).toEqual("b");
    list.removeFirst();
    expect(list.size()).toEqual(1);
    expect(list.getFirst().data).toEqual("c");
  });
});

describe("RemoveLast", () => {
  test("RemoveLast removes the last node when list is empty", () => {
    const list = new List();
    expect(() => {
      list.removeLast();
    }).not.toThrow();
  });

  test("RemoveLast removes the last node when list is length 1", () => {
    const list = new List();
    list.insertFirst("a");
    list.removeLast();
    expect(list.head).toEqual(null);
  });

  test("RemoveLast removes the last node when list is length 2", () => {
    const list = new List();
    list.insertFirst("b");
    list.insertFirst("a");

    list.removeLast();

    expect(list.size()).toEqual(1);
    expect(list.head.data).toEqual("a");
  });

  test("RemoveLast removes the last node when list is length 3", () => {
    const list = new List();
    list.insertFirst("c");
    list.insertFirst("b");
    list.insertFirst("a");
    list.removeLast();

    expect(list.size()).toEqual(2);
    expect(list.getLast().data).toEqual("b");
  });
});

describe("InsertLast", () => {
  test("adds to the end of the list", () => {
    const list = new List();
    list.insertFirst("a");

    list.insertLast("b");

    expect(list.size()).toEqual(2);
    expect(list.getLast().data).toEqual("b");
  });
});

describe("GetAt", () => {
  test("returns the node at given index", () => {
    const list = new List();
    expect(list.getAt(10)).toEqual(null);

    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);

    expect(list.getAt(0).data).toEqual(1);
    expect(list.getAt(1).data).toEqual(2);
    expect(list.getAt(2).data).toEqual(3);
    expect(list.getAt(3).data).toEqual(4);
    expect(list.getAt(10)).toEqual(null);
  });
});

describe("RemoveAt", () => {
  test("removeAt doesnt crash on an empty list", () => {
    const list = new List();
    expect(() => {
      list.removeAt(0);
      list.removeAt(1);
      list.removeAt(2);
    }).not.toThrow();
  });

  test("removeAt doesnt crash on an index out of bounds", () => {
    const list = new List();
    expect(() => {
      const list = new List();
      list.insertFirst("a");
      list.removeAt(1);
    }).not.toThrow();
  });

  test("removeAt deletes the first node", () => {
    const list = new List();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    expect(list.getAt(0).data).toEqual(1);
    list.removeAt(0);
    expect(list.getAt(0).data).toEqual(2);
  });

  test("removeAt deletes the node at the given index", () => {
    const list = new List();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    expect(list.getAt(1).data).toEqual(2);
    list.removeAt(1);
    expect(list.getAt(1).data).toEqual(3);
  });

  test("removeAt works on the last node", () => {
    const list = new List();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    expect(list.getAt(3).data).toEqual(4);
    list.removeAt(3);
    expect(list.getAt(3)).toEqual(null);
  });
});

describe("InsertAt", () => {
  test("inserts a new node with data at the 0 index when the list is empty", () => {
    const list = new List();
    list.insertAt("hi", 0);
    expect(list.getFirst().data).toEqual("hi");
  });

  test("inserts a new node with data at the 0 index when the list has elements", () => {
    const list = new List();
    list.insertLast("a");
    list.insertLast("b");
    list.insertLast("c");
    list.insertAt("hi", 0);
    expect(list.getAt(0).data).toEqual("hi");
    expect(list.getAt(1).data).toEqual("a");
    expect(list.getAt(2).data).toEqual("b");
    expect(list.getAt(3).data).toEqual("c");
  });

  test("inserts a new node with data at a middle index", () => {
    const list = new List();
    list.insertLast("a");
    list.insertLast("b");
    list.insertLast("c");
    list.insertLast("d");
    list.insertAt("hi", 2);
    expect(list.getAt(0).data).toEqual("a");
    expect(list.getAt(1).data).toEqual("b");
    expect(list.getAt(2).data).toEqual("hi");
    expect(list.getAt(3).data).toEqual("c");
    expect(list.getAt(4).data).toEqual("d");
  });

  test("inserts a new node with data at a last index", () => {
    const list = new List();
    list.insertLast("a");
    list.insertLast("b");
    list.insertAt("hi", 2);
    expect(list.getAt(0).data).toEqual("a");
    expect(list.getAt(1).data).toEqual("b");
    expect(list.getAt(2).data).toEqual("hi");
  });

  test("insert a new node when index is out of bounds", () => {
    const list = new List();
    list.insertLast("a");
    list.insertLast("b");
    list.insertAt("hi", 30);

    expect(list.getAt(0).data).toEqual("a");
    expect(list.getAt(1).data).toEqual("b");
    expect(list.getAt(2).data).toEqual("hi");
  });
});
