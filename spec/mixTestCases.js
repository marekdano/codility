let path = require('path');
let expect = require('chai').expect;

let titleToNumber = require(path.join(__dirname, '../Mix/ExcelSheetColumnNumber'));
let firstUniqChar = require(path.join(__dirname, '../Mix/FirstUniqueCharInString'));
let romanToInteger = require(path.join(__dirname, '../Mix/RomanNumToInteger'));

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
		expect(romanToInteger('III')).to.equal(3);
	});

	it('should return 1994 from "MCMXCIV"', () => {
		expect(romanToInteger('MCMXCIV')).to.equal(1994);
	});
});