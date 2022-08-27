/**
 * Merge sort
 * Use when array size is large (size > 10)
 * @param {array} arr Array to sort
 * @param {object} obj Object with sorting paramater
 * @param {string} obj.field Field name to search if it is array of object. Optional
 * @param {boolean} obj.isReverse Sort array in descending. Default to false (ascending)
 * @param {function} obj.primer Function to convert the value. Optional
 * @returns sorted array
 */
export const mergeSort = <T>(
	arr: Array<T>,
	{ field, isReverse, primer }: { isReverse: boolean; field?: string; primer?: Function } = {
		isReverse: false,
	}
) => {
	// helper function to merge two array in order
	const merge = (left: Array<string | number | Object>, right: Array<string | number | Object>) => {
		const results = [];
		let key;
		if (field) {
			key = primer ? (x: any) => primer(x[field]) : (x: any) => x[field];
		} else {
			key = primer ? (x: any) => primer(x) : (x: any) => x;
		}
		// break out loop if one of the array gets empty
		while (left.length && right.length) {
			// Pick the smaller among the smallest element of left and right sub arrays
			if (!isReverse && key(left[0]) < key(right[0])) {
				// ascending
				results.push(left.shift());
			} else if (isReverse && key(left[0]) > key(right[0])) {
				// descending
				results.push(left.shift());
			} else {
				results.push(right.shift());
			}
		}
		// Concatenating the leftover elements in case didn't go through entire left or right array
		return [...results, ...left, ...right];
	};

	// base case
	if (arr.length < 2) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = <Array<T>>mergeSort(arr.slice(0, mid), { field, isReverse, primer });
	const right = <Array<T>>mergeSort(arr.slice(mid), { field, isReverse, primer });
	return merge(left, right);
};
