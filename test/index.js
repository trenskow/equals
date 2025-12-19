//
// index.js
// @trenskow/equals
//
// Created by Kristian Trenskow on 2025/12/19
// For license see LICENSE.
//

import { expect } from 'chai';

import equals from '../lib/index.js';

describe('@trenskow/equals', () => {

	describe('equals', () => {

		it('should return true for equal primitive values.', () => {
			expect(equals(1, 1)).to.be.true;
			expect(equals('test', 'test')).to.be.true;
			expect(equals(true, true)).to.be.true;
		});

		it('should return false for different primitive values.', () => {
			expect(equals(1, 2)).to.be.false;
			expect(equals('test', 'TEST')).to.be.false;
			expect(equals(true, false)).to.be.false;
		});

		it('should return true for equal arrays.', () => {
			expect(equals([1, 2, 3], [1, 2, 3])).to.be.true;
			expect(equals(['a', 'b'], ['a', 'b'])).to.be.true;
		});

		it('should return false for different arrays.', () => {
			expect(equals([1, 2, 3], [1, 2, 4])).to.be.false;
			expect(equals(['a', 'b'], ['a', 'c'])).to.be.false;
		});

		it('should return true for equal objects.', () => {
			expect(equals({ a: 1, b: 2 }, { a: 1, b: 2 })).to.be.true;
			expect(equals({ x: 'x', y: 'y' }, { x: 'x', y: 'y' })).to.be.true;
		});

		it('should return false for different objects.', () => {
			expect(equals({ a: 1, b: 2 }, { a: 1, b: 3 })).to.be.false;
			expect(equals({ x: 'x', y: 'y' }, { x: 'x', y: 'z' })).to.be.false;
		});

		it('should return false for different types.', () => {
			expect(equals(1, '1')).to.be.false;
			expect(equals([1, 2], { a: 1, b: 2 })).to.be.false;
		});

		it ('should not equal null and object.', () => {
			expect(equals(null, {})).to.be.false;
		});

		it ('should equal null and null.', () => {
			expect(equals(null, null)).to.be.true;
		});

		it ('should equal undefined and undefined.', () => {
			expect(equals(undefined, undefined)).to.be.true;
		});

	});

});
