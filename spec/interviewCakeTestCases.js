let path = require('path');
let expect = require('chai').expect;

let getMaxProfit = require(path.join(__dirname, '../InterviewCake/1.AppleStocks'));
let searchPoint = require(path.join(__dirname, '../InterviewCake/13.FindRotationPoint'));

describe('getMaxProfit function', () => {
  it('exists', () => {
    expect(getMaxProfit).to.be.a('function');
	});

	it('getMaxProfit([10, 7, 5, 8, 11, 9])', () => {
    expect(getMaxProfit([10, 7, 5, 8, 11, 9])).to.equal(6);
	});

	it('getMaxProfit([10, 2, 5, -4.1, -1,8])', () => {
    expect(getMaxProfit([10, 2, 5, -4.1, -1,8])).to.equal(12.1);
	});

	it('getMaxProfit([10, 2, 5, -10, -5, -2])', () => {
    expect(getMaxProfit([10, 2, 5, -10, -5, -2])).to.equal(8);
	});
});

describe('searchPoint function', () => {
  it('exists', () => {
    expect(searchPoint).to.be.a('function');
  });

  it('exists', () => {
    expect(searchPoint([])).to.equal(0);
  });

  it('exists', () => {
    expect(searchPoint(['k','v','a','b','c','d','e','g','i'])).to.equal(2);
  });

  it('exists', () => {
    expect(searchPoint(['b','c','d','e','g','i','k','v','a'])).to.equal(8);
  });

  it('exists', () => {
    expect(searchPoint(['c','d','e','g','i','k','s','a','b'])).to.equal(7);
  });

  it('exists', () => {
    expect(searchPoint(['a','b','c','d','e','g','i','k','v'])).to.equal(0);
  });
});