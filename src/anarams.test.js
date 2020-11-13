import { expect } from 'chai';
import { checkIfAnagram } from './anagrams';

describe('the checkIfAnagram function', () => {
	it('checks that the 2 words are not the same', () => {
		const input1 = 'silent';
		const input2 = 'silent';
		const expected = false;
		const actual = checkIfAnagram(input1, input2);
		expect(actual).to.equal(expected);
	});
	it('returns true if the two words are anagrams', () => {
		const input1 = 'listen';
		const input2 = 'silent';
		const expected = true;
		const actual = checkIfAnagram(input1, input2);
		expect(actual).to.equal(expected);
	});
	it('returns false if they are not anagrams', () => {
		const input1 = 'listen';
		const input2 = 'hello';
		const expected = false;
		const actual = checkIfAnagram(input1, input2);
		expect(actual).to.equal(expected);
	});
});
