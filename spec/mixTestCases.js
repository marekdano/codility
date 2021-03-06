let path = require('path');
let expect = require('chai').expect;

let ListNode = require(path.join(__dirname, '../Extra/shared/ListNode'));
let titleToNumber = require(path.join(__dirname, '../Mix/ExcelSheetColumnNumber'));
let firstUniqChar = require(path.join(__dirname, '../Mix/FirstUniqueCharInString'));
let romanToInteger = require(path.join(__dirname, '../Mix/RomanNumToInteger'));
let deleteNode = require(path.join(__dirname, '../Mix/DeleteNodeInLinkedList'));
let isAnagram = require(path.join(__dirname, '../Mix/IsAnagram'));
const alphabeticShift = require(path.join(__dirname, '../Mix/AlphabeticShift'));
const alternatingSums = require(path.join(__dirname, '../Mix/AlternatingSums'));
const findSecondLargestNumber = require(path.join(__dirname, '../Mix/FindSecondLargestInArray'));
const binaryTree = require(path.join(__dirname, '../Mix/InvertBinaryTree'));

describe('titleToNumber function', () => {
  it('exists', () => {
    expect(titleToNumber).to.be.a('function');
  });

  it('should return 1 from title of "A"', () => {
    expect(titleToNumber('A')).to.equal(1);
  });

  it('should return 28 from title of "AB"', () => {
    expect(titleToNumber('AB')).to.equal(28);
  });

  it('should return 701 from title of "ZY"', () => {
    expect(titleToNumber('ZY')).to.equal(701);
  });
});

describe('firstUniqChar function', () => {
  it('exists', () => {
    expect(firstUniqChar).to.be.a('function');
  });

  it('should return 0 from string of "leetcode"', () => {
    expect(firstUniqChar('leetcode')).to.equal(0);
  });

  it('should return 2 from string of "loveleetcode"', () => {
    expect(firstUniqChar('loveleetcode')).to.equal(2);
  });

  it('should return -1 from string of "tratra"', () => {
    expect(firstUniqChar('tratra')).to.equal(-1);
  });
});

describe('romanToInteger function', () => {
  it('exists', () => {
    expect(romanToInteger).to.be.a('function');
  });

  it('should return 3 from "III"', () => {
    expect(romanToInteger('III')).to.equal(3);
  });

  it('should return 4 from "IV"', () => {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('should return 9 from "IX"', () => {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('should return 58 from "LVIII"', () => {
    expect(romanToInteger('LVIII')).to.equal(58);
  });

  it('should return 1994 from "MCMXCIV"', () => {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });

  it('should return 4499 from "MMMMCDXCIX"', () => {
    expect(romanToInteger('MMMMCDXCIX')).to.equal(4499);
  });
});

describe('deleteNode function', () => {
  let head, b, c, d;
  beforeEach(() => {
    head = new ListNode('1');
    b = new ListNode('2');
    c = new ListNode('3');
    d = new ListNode('4');

    head.next = b;
    b.next = c;
    c.next = d;
  });

  it('exists', () => {
    expect(deleteNode).to.be.a('function');
  });

  it('should delete node in the middle of list', () => {
    deleteNode(head, '3');
    expect(head.next.next.value).to.equal('4');
  });

  it('should delete node at the end of list', () => {
    deleteNode(head, '4');
    expect(head.next.next.next).to.equal(null);
  });

  it('should delete node at the start of list', () => {
    const h = deleteNode(head, '1');
    expect(h.value).to.equal('2');
  });
});

describe('isAnagram', () => {
  it('exists', () => {
    expect(isAnagram).to.be.a('function');
  });

  it('should return true when two strings are anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).to.equal(true);
  });

  it('should return false when two strings are NOT anagram', () => {
    expect(isAnagram('rat', 'car')).to.equal(false);
  });
});

describe('alphabeticShift', () => {
  it('exists', () => {
    expect(alphabeticShift).to.be.a('function');
  });

  it('should return empty string when empty string is provided', () => {
    expect(alphabeticShift('')).to.equal('');
  });

  it('should throw error when input string contains other characters than alphabetic ones', () => {
    expect(() => alphabeticShift('fds12$s')).to.throw('The input string contains oher character then alphbetic ones.');
  });

  it('should return "ZuMo" string when "AvNp" is provided', () => {
    expect(alphabeticShift('ZuMo')).to.equal('AvNp');
  });

  it('should return "dsbaz" string when "crazy" is provided', () => {
    expect(alphabeticShift('crazy')).to.equal('dsbaz');
  });
});

describe('alternatingSums', () => {
  it('exists', () => {
    expect(alternatingSums).to.be.a('function');
  });

  it('should return array of [0, 0] when empty input array is provided', () => {
    const result = alternatingSums([]);
    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal(0);
  });

  it('should return array with one element when input array contains just one element', () => {
    const result = alternatingSums([10]);
    expect(result[0]).to.equal(10);
    expect(result[1]).to.equal(0);
  });

  it('should return array with two element when input array contains more than one element', () => {
    const result = alternatingSums([50, 60, 60, 45, 70]);
    expect(result[0]).to.equal(180);
    expect(result[1]).to.equal(105);
  });
});

describe('findSecondLargestNumber', () => {
  it('exists', () => {
    expect(findSecondLargestNumber).to.be.a('function');
  });

  it('should return "undefined" when array is empty or array contains element other than number', () => {
    expect(findSecondLargestNumber([])).to.equal(undefined);
  });

  it('should return "undefined" when array contains one element only', () => {
    expect(findSecondLargestNumber([1])).to.equal(undefined);
  });

  it('should return "undefined" when array contains element other than number', () => {
    expect(findSecondLargestNumber([1, 3, 'text'])).to.equal(undefined);
  });

  it('should return "undefined" when array contains all the same elements', () => {
    expect(findSecondLargestNumber([1, 1, 1])).to.equal(undefined);
  });

  it('should return the second largest number', () => {
    expect(findSecondLargestNumber([4, 1002, 2, 5, 77])).to.equal(77);
  });

  it('should return the second largest number if array contains zeros', () => {
    expect(findSecondLargestNumber([0, 1])).to.equal(0);
    expect(findSecondLargestNumber([1, 0])).to.equal(0);
    expect(findSecondLargestNumber([1, 1, 1, 0])).to.equal(0);
  });

  it('should return the second largest number if array contains negative numbers', () => {
    expect(findSecondLargestNumber([-3, -110, -105, -10])).to.equal(-10);
  });
});

describe('invertBinaryTree', () => {
  it('should return inverted binary tree', () => {
    const Node = binaryTree.Node;

    const tree = new Node(4);
    tree.left = new Node(2);
    tree.right = new Node(7);
    tree.left.left = new Node(1);
    tree.left.right = new Node(3);
    tree.right.left = new Node(6);
    tree.right.right = new Node(9);

    const result = binaryTree.invertBinaryTree(tree);
    expect(result.left.value).to.equal(7);
    expect(result.right.value).to.equal(2);
    expect(result.left.left.value).to.equal(9);
    expect(result.left.right.value).to.equal(6);
    expect(result.right.left.value).to.equal(3);
    expect(result.right.right.value).to.equal(1);
  });
});
