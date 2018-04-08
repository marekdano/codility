let path = require("path");
let expect = require("chai").expect;

let getMaxProfit = require(path.join(
  __dirname,
  "../InterviewCake/1.AppleStocks"
));

let BinaryTreeNode = require(path.join(
  __dirname,
  "../InterviewCake/shared/BSTNode"
));
let secondLargestInBST = require(path.join(
  __dirname,
  "../InterviewCake/10.SecondLargestInBST"
));

let searchPoint = require(path.join(
  __dirname,
  "../InterviewCake/13.FindRotationPoint"
));

let find_kth = require(path.join(
  __dirname,
  "../InterviewCake/25.Find_k-th_inLinkedList"
));

let bracketValidator = require(path.join(
  __dirname,
  "../InterviewCake/29.BracketValidator.js"
));

const LinkedListNode = find_kth.LinkedListNode;
const kthToLastNode = find_kth.kthToLastNode;

let reverseWords = require(path.join(
  __dirname,
  "../InterviewCake/27.ReverseWords"
));

//import { LinkedListNode, kthToLastNode } from "../InterviewCake/25.Find_k-th_inLinkedList";

describe("getMaxProfit function", () => {
  it("exists", () => {
    expect(getMaxProfit).to.be.a("function");
  });

  it("getMaxProfit([10, 7, 5, 8, 11, 9])", () => {
    expect(getMaxProfit([10, 7, 5, 8, 11, 9])).to.equal(6);
  });

  it("getMaxProfit([10, 2, 5, -4.1, -1,8])", () => {
    expect(getMaxProfit([10, 2, 5, -4.1, -1, 8])).to.equal(12.1);
  });

  it("getMaxProfit([10, 2, 5, -10, -5, -2])", () => {
    expect(getMaxProfit([10, 2, 5, -10, -5, -2])).to.equal(8);
  });
});

describe("searchPoint function", () => {
  it("exists", () => {
    expect(searchPoint).to.be.a("function");
  });

  it("searchPoint should be in position 0", () => {
    expect(searchPoint([])).to.equal(0);
  });

  it("searchPoint should be in position 2", () => {
    expect(searchPoint(["k", "v", "a", "b", "c", "d", "e", "g", "i"])).to.equal(
      2
    );
  });

  it("searchPoint should be in position 8", () => {
    expect(searchPoint(["b", "c", "d", "e", "g", "i", "k", "v", "a"])).to.equal(
      8
    );
  });

  it("searchPoint should be in position 8", () => {
    expect(searchPoint(["c", "d", "e", "g", "i", "k", "s", "a", "b"])).to.equal(
      7
    );
  });

  it("searchPoint should be in position 0", () => {
    expect(searchPoint(["a", "b", "c", "d", "e", "g", "i", "k", "v"])).to.equal(
      0
    );
  });
});

describe("secondLargestInBST function", () => {
  it("exists", () => {
    expect(secondLargestInBST).to.be.a("function");
  });

  it("should return node with value 11 in tree with left node only", () => {
    const rootNode = new BinaryTreeNode(5);
    const three = rootNode.insertLeft(3);
    const eight = rootNode.insertRight(8);
    const one = three.insertLeft(1);
    const four = three.insertRight(4);
    const seven = eight.insertLeft(7);
    const twelve = eight.insertRight(12);
    const ten = twelve.insertLeft(10);
    const nine = ten.insertLeft(9);
    const eleven = ten.insertRight(11);

    expect(secondLargestInBST(rootNode)).to.equal(11);
  });

  it("should return node with value 8 in tree with left node only", () => {
    const rootNode = new BinaryTreeNode(5);
    const three = rootNode.insertLeft(3);
    const eight = rootNode.insertRight(8);
    const one = three.insertLeft(1);
    const four = three.insertRight(4);
    const seven = eight.insertLeft(7);
    const nine = eight.insertRight(9);

    expect(secondLargestInBST(rootNode)).to.equal(8);
  });
});

describe("LinkedListNode function", () => {
  it("exists", () => {
    expect(LinkedListNode).to.be.a("function");
  });
});

describe("kthToLastNode function", () => {
  it("exists", () => {
    expect(kthToLastNode).to.be.a("function");
  });

  it("should return node with value Devil's Food", () => {
    let a = new LinkedListNode("Angel Food");
    let b = new LinkedListNode("Bundt");
    let c = new LinkedListNode("Cheese");
    let d = new LinkedListNode("Devil's Food");
    let e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(kthToLastNode(2, a).value).to.equal("Devil's Food");
  });

  it("should return node with value Angel Food", () => {
    let a = new LinkedListNode("Angel Food");
    let b = new LinkedListNode("Bundt");
    let c = new LinkedListNode("Cheese");
    let d = new LinkedListNode("Devil's Food");
    let e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(kthToLastNode(5, a).value).to.equal("Angel Food");
  });

  it("should return node with value Devil's Food", () => {
    let a = new LinkedListNode("Angel Food");
    let b = new LinkedListNode("Bundt");
    let c = new LinkedListNode("Cheese");
    let d = new LinkedListNode("Devil's Food");
    let e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(kthToLastNode(1, a).value).to.equal("Eccles");
  });

  it("should throw exception of 'k is larger than the length of the linked list'", () => {
    let a = new LinkedListNode("Angel Food");
    let b = new LinkedListNode("Bundt");
    let c = new LinkedListNode("Cheese");
    let d = new LinkedListNode("Devil's Food");
    let e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(() => kthToLastNode(10, a)).to.throw(
      "k is larger than the length of the linked list: 10"
    );
  });

  it("should throw exception of 'Impossible to find less than first to last node'", () => {
    let a = new LinkedListNode("Angel Food");
    let b = new LinkedListNode("Bundt");
    let c = new LinkedListNode("Cheese");
    let d = new LinkedListNode("Devil's Food");
    let e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(() => kthToLastNode(0, a)).to.throw(
      "Impossible to find less than first to last node: 0"
    );
  });
});

describe("BracketValidator function", () => {
  it("exists", () => {
    expect(bracketValidator).to.be.a("function");
  });

  it("should return true for '{[]()}'", () => {
    expect(bracketValidator("{[]()}")).to.equal(true);
  });

  it("should return false for '{[(])}'", () => {
    expect(bracketValidator("{[(])}")).to.equal(false);
  });

  it("should return false for '{[}'", () => {
    expect(bracketValidator("{[}")).to.equal(false);
  });
});

describe("ReverseWords function", () => {
  it("exists", () => {
    expect(reverseWords).to.be.a("function");
  });

  it("should return 'steal pound cake'", () => {
    expect(
      reverseWords([
        "c",
        "a",
        "k",
        "e",
        " ",
        "p",
        "o",
        "u",
        "n",
        "d",
        " ",
        "s",
        "t",
        "e",
        "a",
        "l"
      ])
    ).to.equal("steal pound cake");
  });

  it("should return 'cake'", () => {
    expect(reverseWords(["c", "a", "k", "e"])).to.equal("cake");
  });

  it("should return 'steal cake'", () => {
    expect(
      reverseWords(["c", "a", "k", "e", " ", "s", "t", "e", "a", "l"])
    ).to.equal("steal cake");
  });

  it("should return empty string", () => {
    expect(reverseWords([])).to.equal("");
  });
});
