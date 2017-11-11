// PROBLEM
/**
 * Suppose we could access yesterday's stock prices as an array, where:
 * The indices are the time in minutes past trade opening time, which was 9:30am local time.
 * 
 * The values are the price in dollars of Apple stock at that time.
 * So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
 * 
 * Write an efficient function that takes stockPricesYesterday and returns the best profit 
 * I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 * 
 * For example:
 * 
 * var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
 * 
 * getMaxProfit(stockPricesYesterday); // returns 6 (buying for $5 and selling for $11)
 * 
 * No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass). 
 */

// SOLUTION

// Complexity is O(n) time and O(1) space. We only loop through the array once.

let getMaxProfit = (stockPricesYesterday) => {
	
	// make sure we have at least 2 prices
	if (stockPricesYesterday.length < 2) {
		throw new Error('Getting a profit requires at least 2 prices');
	}
	
	// we'll greedily update minPrice and maxProfit, so we initialize
	// them to the first price and the first possible profit
	let minPrice = stockPricesYesterday[0];
	let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
	
	// start at the second (index 1) time
	// we can't sell at the first time, since we must buy first,
	// and we can't buy and sell at the same time!
	// if we started at index 0, we'd try to buy *and* sell at time 0.
	// this would give a profit of 0, which is a problem if our
	// maxProfit is supposed to be *negative*--we'd return 0.
	for (let i = 1; i < stockPricesYesterday.length; i++) {
		let currentPrice = stockPricesYesterday[i];

		// see what our profit would be if we bought at the
		// min price and sold at the current price
		let potentialProfit = currentPrice - minPrice;

		// update maxProfit if we can do better
		maxProfit = Math.max(maxProfit, potentialProfit);

		// update minPrice so it's always
		// the lowest price we've seen so far
		minPrice = Math.min(minPrice, currentPrice);
	}

	return maxProfit;
}

// TEST Cases in spec/interviewCakeTestCases.js
// [10, 7, 5, 8, 11, 9];
// [10, 2, 5, -4.1, -1,8];
// [10, 2, 5, -10, -5, -2];

module.exports = getMaxProfit;
