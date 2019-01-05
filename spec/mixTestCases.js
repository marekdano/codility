let path = require('path');
let expect = require('chai').expect;

let titleToNumber = require(path.join(__dirname, '../Mix/ExcelSheetColumnNumber'));

describe('titleToNumber function', () => {
  it('exists', () => {
    expect(titleToNumber).to.be.a('function');
	});

	it('should return 1 from title of "A"', () => {
		expect(titleToNumber('A')).to.equal(1);
	});

	it('should return 28 from title of "AB"', () => {
		expect(titleToNumber('A')).to.equal(28);
	});

	it('should return 701 from title of "ZY"', () => {
		expect(titleToNumber('A')).to.equal(701);
	});
});