import { products } from '../ProductOfArrayExceptSelf'

describe('products function', () => {
	it('returns array of products', () => {
		expect(products([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
	})
})
