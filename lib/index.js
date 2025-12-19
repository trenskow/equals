//
// index.js
// @trenskow/equals
//
// Created by Kristian Trenskow on 2025/12/19
// For license see LICENSE.
//

const equals = (a, b) => {

	if (a === b) return true;
	if (typeof a !== typeof b) return false;

	if (a && b && typeof a === 'object') {

		if (Array.isArray(a) && Array.isArray(b)) {
			return equals.array(a, b);
		}

		return equals.object(a, b);

	}

	return false;

};

equals.array = (a, b) => {

	if (a.length !== b.length) return false;

	for (let idx = 0; idx < a.length; idx++) {
		if (!equals(a[idx], b[idx])) return false;
	}

	return true;

};

equals.object = (a, b) => {
	return equals.array(Object.keys(a), Object.keys(b)) && equals.array(Object.values(a), Object.values(b));
};

export default (...args) => {

	if (args.length < 2) return false;

	for (let idx = 1; idx < args.length; idx++) {
		return equals(args[idx - 1], args[idx]);
	}

	return true;

};
