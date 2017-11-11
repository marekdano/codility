let path = require('path');
let expect = require('chai').expect;

let getMaxProfit = require(path.join(__dirname, '../InterviewCake/1.AppleStocks'));

describe('getMaxProfit function', () => {
  it('exists', () => {
    expect(getMaxProfit).to.be.a('function');
	});

	it('exists', () => {
    expect(getMaxProfit([10, 7, 5, 8, 11, 9])).to.equal(6);
	});

	it('exists', () => {
    expect(getMaxProfit([10, 2, 5, -4.1, -1,8])).to.equal(12.1);
	});

	it('exists', () => {
    expect(getMaxProfit([10, 2, 5, -10, -5, -2])).to.equal(8);
	});
});
