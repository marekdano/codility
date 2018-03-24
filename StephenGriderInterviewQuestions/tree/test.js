const T = require("./index");
const Node = T.Node;
const Tree = T.Tree;

describe("Node", () => {
  test("Node is a constructor", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node has a data and children properties", () => {
    const n = new Node("a");
    expect(n.data).toEqual("a");
    expect(n.children.length).toEqual(0);
  });

  test("Node can add children", () => {
    const n = new Node("a");
    n.add("b");
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });

  test("Node can remove children", () => {
    const n = new Node("a");
    n.add("b");
    expect(n.children.length).toEqual(1);
    n.remove("b");
    expect(n.children.length).toEqual(0);
  });
});

describe("Tree", () => {
  test("starts empty", () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test("Can traverse bf", () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node("a");
    t.root.add("b");
    t.root.add("c");
    t.root.children[0].add("d");
    t.root.children[0].add("e");
    t.root.children[1].add("f");

    t.traverseBF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  test("Can traverse DF", () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node("a");
    t.root.add("b");
    t.root.add("e");
    t.root.children[0].add("c");
    t.root.children[0].add("d");
    t.root.children[1].add("f");

    t.traverseDF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(["a", "b", "c", "d", "e", "f"]);
  });
});
