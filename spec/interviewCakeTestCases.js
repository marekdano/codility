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

let LinkedListNode = require(path.join(
  __dirname,
  "../InterviewCake/shared/LinkedListNode"
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

//const LinkedListNode = find_kth.LinkedListNode;
const kthToLastNode = find_kth.kthToLastNode;

let reverseWords = require(path.join(
  __dirname,
  "../InterviewCake/27.ReverseWords"
));

let containsCycle = require(path.join(
  __dirname,
  "../InterviewCake/23.CycledLinkedList"
));

let Stack = require(path.join(__dirname, "../InterviewCake/shared/Stack"));

let MaxStack = require(path.join(
  __dirname,
  "../InterviewCake/20.GetMaxFromStack"
));

const QueueWithTwoStacks = require(path.join(
  __dirname,
  "../InterviewCake/19.QueueWithTwoStacks"
));

const isBalanced = require(path.join(__dirname, "../InterviewCake/BalanceBST"));

const isBinarySearchTree = require(path.join(
  __dirname,
  "../InterviewCake/BST"
));

const rand5 = require(path.join(__dirname, "../InterviewCake/Rand5"));

const rand7 = require(path.join(__dirname, "../InterviewCake/Rand7"));

const palindrome = require(path.join(
  __dirname,
  "../InterviewCake/PermutationPalindrome"
));

const getClosingParenthesis = require(path.join(
  __dirname,
  "../InterviewCake/ParenthesisMatching"
));

const getPermutations = require(path.join(
  __dirname,
  "../InterviewCake/StringPermutationsRecur"
));

const canTwoMoviesFillFlight = require(path.join(
  __dirname,
  "../InterviewCake/CanTwoMoviesFillFlight"
));

//import { LinkedListNode, kthToLastNode } from "../InterviewCake/25.Find_k-th_inLinkedList";

const getTheShortestPath = require(path.join(
  __dirname, 
  "../InterviewCake/GetTheShortestPath"
));

const reverse = require(path.join(
  __dirname,
  "../InterviewCake/ReverseLinkedList"
));

const WordCloudData = require(path.join(
  __dirname,
  "../InterviewCake/WordCloud"
));

const findUniqueDeliveryId = require(path.join(
  __dirname,
  "../InterviewCake/FindUniqueDeliveryId"
));

const deleteNode = require(path.join(
  __dirname,
  "../InterviewCake/DeleteNodeFromLinkedList"
));

const mergeArrays = require(path.join(
  __dirname,
  "../InterviewCake/MergeArrays"
));

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

describe("containsCycle function", () => {
  it("exists", () => {
    expect(containsCycle).to.be.a("function");
  });

  it("should return false when linked list is cycled", () => {
    const rootNode = new LinkedListNode(0);
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);

    rootNode.next = node1;
    node1.next = node2;

    expect(containsCycle(rootNode)).to.equal(false);
  });

  it("should return true when linked list is cycled", () => {
    const rootNode = new LinkedListNode(0);
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    const node4 = new LinkedListNode(4);

    rootNode.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    expect(containsCycle(rootNode)).to.equal(true);
  });
});

describe("getMax function", () => {
  it("exists", () => {
    expect(new MaxStack().getMax).to.be.a("function");
  });

  it("should max value be 5", () => {
    const stack = new MaxStack();
    stack.push(2);
    stack.push(5);
    stack.push(3);
    stack.push(4);

    expect(stack.getMax()).to.equal(5);
  });

  it("should max value be 6", () => {
    const stack = new MaxStack();
    stack.push(2);
    stack.push(5);
    stack.push(3);
    stack.push(4);
    stack.push(6);

    expect(stack.getMax()).to.equal(6);
  });

  it("should max value be 5 after popping the max value of 6", () => {
    const stack = new MaxStack();
    stack.push(2);
    stack.push(5);
    stack.push(3);
    stack.push(4);
    stack.push(6);
    stack.pop();

    expect(stack.getMax()).to.equal(5);
  });
});

describe("QueueWithTwoStacks", () => {
  it("should exist function enqueue", () => {
    expect(new QueueWithTwoStacks().enqueue).to.be.a("function");
  });

  it("should exist function dequeue", () => {
    expect(new QueueWithTwoStacks().enqueue).to.be.a("function");
  });

  it("should return 'a'", () => {
    let queue = new QueueWithTwoStacks();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.dequeue()).to.equal("a");
  });

  it("should empty whole queue", () => {
    let queue = new QueueWithTwoStacks();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();
    queue.enqueue("d");
    expect(queue.dequeue()).to.equal("b");
    expect(queue.dequeue()).to.equal("c");
    expect(queue.dequeue()).to.equal("d");
    expect(queue.dequeue()).to.equal(undefined);
  });
});

describe("isBalanced", () => {
  it("exists", () => {
    expect(isBalanced).to.be.a("function");
  });

  it("should return TRUE when BST is balanced", () => {
    const rootNode = new BinaryTreeNode(5);
    const three = rootNode.insertLeft(3);
    const eight = rootNode.insertRight(8);
    const one = three.insertLeft(1);
    const zero = one.insertLeft(0);
    const four = three.insertRight(4);
    const seven = eight.insertLeft(7);
    const twelve = eight.insertRight(12);
    const ten = twelve.insertLeft(10);

    expect(isBalanced(rootNode)).to.equal(true);
  });

  it("should return FALSE when BST is not balanced", () => {
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
    const thirteen = eleven.insertRight(13);

    expect(isBalanced(rootNode)).to.equal(false);
  });
});

describe("isBinarySearchTree", () => {
  it("exists", () => {
    expect(isBinarySearchTree).to.be.a("function");
  });

  it("should return TRUE when is binary search tree", () => {
    const rootNode = new BinaryTreeNode(5);
    const three = rootNode.insertLeft(3);
    const eight = rootNode.insertRight(8);
    const one = three.insertLeft(1);
    const zero = one.insertLeft(0);
    const four = three.insertRight(4);
    const seven = eight.insertLeft(7);
    const twelve = eight.insertRight(12);
    const ten = twelve.insertLeft(10);

    expect(isBinarySearchTree(rootNode)).to.equal(true);
  });

  it("should return FALSE when is not binary search tree", () => {
    const rootNode = new BinaryTreeNode(5);
    const three = rootNode.insertLeft(3);
    const eight = rootNode.insertRight(8);
    const one = three.insertLeft(1);
    const zero = one.insertLeft(11);
    const four = three.insertRight(4);
    const seven = eight.insertLeft(7);
    const twelve = eight.insertRight(12);
    const ten = twelve.insertLeft(10);

    expect(isBinarySearchTree(rootNode)).to.equal(false);
  });
});

describe("Rand5 function", () => {
  it("exists", () => {
    expect(rand5).to.be.a("function");
  });

  it("should return number between 1 and 5", () => {
    expect([1, 2, 3, 4, 5]).to.include(rand5());
  });
});

describe("Rand7 function", () => {
  it("exists", () => {
    expect(rand7).to.be.a("function");
  });

  it("should return number between 1 and 7", () => {
    expect([1, 2, 3, 4, 5, 6, 7]).to.include(rand7());
  });
});

describe("palindrome function", () => {
  it("exists", () => {
    expect(palindrome).to.be.a("function");
  });

  it("should return true when palindrome is 'civic'", () => {
    expect(palindrome("civic")).to.true;
  });

  it("should return true when palindrome is 'ivicc'", () => {
    expect(palindrome("ivicc")).to.true;
  });

  it("should return false when palindrome is 'civil'", () => {
    expect(palindrome("civil")).to.false;
  });

  it("should return false when palindrome is 'livci'", () => {
    expect(palindrome("livci")).to.false;
  });
});

describe("getClosingParenthesis function", () => {
  it("exists", () => {
    expect(getClosingParenthesis).to.be.a("function");
  });

  it("should return index of 79, place of the closing parenthesis", () => {
    const str = `Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.`;
    expect(getClosingParenthesis(str, 10)).to.equal(79);
  });

  it("should return index of 46, place of the closing parenthesis", () => {
    const str = `Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.`;
    expect(getClosingParenthesis(str, 28)).to.equal(46);
  });

  it("should return index of 78, place of the closing parenthesis", () => {
    const str = `Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.`;
    expect(getClosingParenthesis(str, 57)).to.equal(78);
  });

  it("should throw error when there is no closing parenthesis", () => {
    const str = `Sometimes (when I nest them (my parentheticals) too much (like this (and this)) they get confusing.`;
    expect(getClosingParenthesis.bind(getClosingParenthesis, str, 10)).to.throw('No closing parenthesis :(');
    // or 
    // expect(() => getClosingParenthesis(str, 10)).to.throw('No closing parenthesis :(');
  });
});

describe("getPermutations function", () => {
  it("exists", () => {
    expect(getPermutations).to.be.a("function");
  });

  it("should return array of permutations when string is defined", () => {
    const result = new Set(['cat', 'act', 'atc', 'tca', 'cta', 'tac']);
    expect(getPermutations('cat')).to.eql(result);
  });

  it("should return empty array  when string is empty / not defined", () => {
    const result = new Set();
    expect(getPermutations('')).to.eql(result);
  });
});

describe("getTheShortestPath function", () => {
  it("exists", () => {
    expect(getTheShortestPath).to.be.a("function");
  });

  it("should return the shortest path", () => {
    const network = {
      'Min': ['William', 'Jayden', 'Omar'],
      'William': ['Min', 'Noam'],
      'Jayden': ['Min', 'Amelia', 'Ren', 'Noam'],
      'Ren': ['Jayden', 'Omar'],
      'Amelia': ['Jayden', 'Adam', 'Miguel'],
      'Adam': ['Amelia', 'Miguel'],
      'Miguel': ['Amelia', 'Adam'],
      'Noam': ['Jayden', 'William'],
      'Omar': ['Ren', 'Min'],
    };
    const result = ['Jayden', 'Amelia', 'Adam'];
    expect(getTheShortestPath(network, 'Jayden', 'Adam')).to.eql(result);
  });
});

describe("canTwoMoviesFillFlight", () => {
  it("exists", () => {
    expect(canTwoMoviesFillFlight).to.be.a("function");
  });

  it("should return false when two movies lengths are longer then flight length", () => {
    const movieLengths = [3.4, 2.6, 4.9];
    const flightLength = 5.5;
    expect(canTwoMoviesFillFlight(movieLengths, flightLength)).to.false;
  });

  it("should return true when two movies lengths equal to flight length", () => {
    const movieLengths = [4.7, 2.3, 3.2, 1.8, 3.1];
    const flightLength = 5.4;
    expect(canTwoMoviesFillFlight(movieLengths, flightLength)).to.false;
  });
});

describe("reverse function", () => {
  it("exists", () => {
    expect(reverse).to.be.a("function");
  });

  it("should reverse linked list and return tail as head of the reversed list", () => {
    let a = new LinkedListNode("Angel Food");
    let b = new LinkedListNode("Bundt");
    let c = new LinkedListNode("Cheese");
    let d = new LinkedListNode("Devil's Food");
    let e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(reverse(a)).to.equal(e);
  });

  it("should return the same node of linked list when linked list has one node only", () => {
    let a = new LinkedListNode("Angel Food");
    a.next = null;

    expect(reverse(a)).to.equal(a);
  });
});

describe("word cloud data", () => {
  it("exists", () => {
    expect(WordCloudData).to.be.a("function");
  });

  it("should populate word cloud when sentence contains extra characters", () => {
    const str = `
      We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. 
      The bill came to five dollars.
    `;

    const wordCloud = new WordCloudData(str);
    expect(wordCloud.getWordsToCounts().get('we')).to.equal(4);
  });

  it("should populate word cloud when sentence contains uppercase letters", () => {
    const str = `
      We came, we saw, we ate cake.
      Friends, Romans, countrymen! Let us eat cake.
      New tourists in New York often wait in long lines for cronuts.
    `;
    const wordCloud = new WordCloudData(str);
    expect(wordCloud.getWordsToCounts().get('New')).to.equal(2);
  });

  it("should populate word cloud when sentence constains the same words with different meaning", () => {
    const str = `
      Cliff finished his cake and paid the bill.
      Bill finished his cake at the edge of the cliff.
    `;
    const wordCloud = new WordCloudData(str);
    expect(wordCloud.getWordsToCounts().get('cliff')).to.equal(2);
    expect(wordCloud.getWordsToCounts().get('bill')).to.equal(2);
  });
});

describe("find unique delivery Id function", () => {
  it("exists", () => {
    expect(findUniqueDeliveryId).to.be.a("function");
  });

  it("return unique delivery Id", () => {
    const ids = [2,3,4,2,1,6,1,3,6];
    expect(findUniqueDeliveryId(ids)).to.equal(4);
  })
});

describe("deleteNode", () => {
  it("should exist", () => {
    expect(deleteNode).to.be.a("function");
  });

  it("should delete the node when it is in the linked list", () => {
    const a = new LinkedListNode('A');
    const b = new LinkedListNode('B');
    const c = new LinkedListNode('C');

    a.next = b;
	  b.next = c;

    deleteNode(b);
    expect(a.next.value).to.equal('C');
  });

  it("should throw error when trying to delete the last node in the linked list", () => {
    const a = new LinkedListNode('A');
    const b = new LinkedListNode('B');
    const c = new LinkedListNode('C');
    const d = new LinkedListNode('D');

    a.next = b;
	  b.next = c;

    expect(() => deleteNode(c)).to.throw("Can't delete the last node with this technique!");
  });
})

describe("mergeArrays", () => {
  it("should exist", () => {
    expect(mergeArrays).to.be.a("function");
  });

  it("should merge two sorted arrays to one sorted array", () => {
    const myArray = [3, 4, 6, 10, 11, 15];
    const alicesArray = [1, 5, 8, 12, 14, 19];
    const result = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

    expect(mergeArrays(myArray, alicesArray)).to.equal(result); 
  });
});
