let path = require('path');
let expect = require('chai').expect;

let ListNode = require(path.join(__dirname, '../Extra/shared/ListNode'));
let titleToNumber = require(path.join(__dirname, '../Mix/ExcelSheetColumnNumber'));
let firstUniqChar = require(path.join(__dirname, '../Mix/FirstUniqueCharInString'));
let romanToInteger = require(path.join(__dirname, '../Mix/RomanNumToInteger'));
let deleteNode = require(path.join(__dirname, '../Mix/DeleteNodeInLinkedList'));
let isAnagram = require(path.join(__dirname, '../Mix/IsAnagram'));

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
		head = new ListNode("1");
    b = new ListNode("2");
    c = new ListNode("3");
    d = new ListNode("4");
		
		head.next = b;
    b.next = c;
		c.next = d;
	});

	it('exists', () => {
		expect(deleteNode).to.be.a('function');
	});

	it('should delete node in the middle of list', () => {
		deleteNode(head, "3");
    expect(head.next.next.value).to.equal("4");
	});

	it('should delete node at the end of list', () => {
		deleteNode(head, "4");
    expect(head.next.next.next).to.equal(null);
	});

	it('should delete node at the start of list', () => {
		const h = deleteNode(head, "1");
    expect(h.value).to.equal("2");
	});
});

describe('isAnagram', () => {
	it('exists', () => {
		expect(isAnagram).to.be.a('function');
	});

	it('should return true when two strings are anagram', () => {
		expect(isAnagram("anagram", "nagaram")).to.equal(true);
	});

	it('should return false when two strings are NOT anagram', () => {
		expect(isAnagram("rat", "car")).to.equal(false);
	});
});