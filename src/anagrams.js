export function checkIfAnagram(input1, input2) {
	if (input1 === input2) {
		return false;
	}
	if (input1.split('').sort().join('') === input2.split('').sort().join('')) {
		return true;
	} else {
		return false;
	}
}
