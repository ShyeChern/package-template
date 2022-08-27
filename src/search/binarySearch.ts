/**
 * Find the index of the value in array. The array must be sorted
 * @param {array} arr Sorted array
 * @param {*} value value to find
 * @param {string} field Field name to search if it is array of object. Optional
 * @returns index of the array, -1 if not found
 */
export const binarySearch = <T extends { [key: string]: any }>(
	arr: Array<T>,
	value: T,
	field?: string
) => {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		const middle = Math.floor((start + end) / 2);
		let current;
		if (field) {
			current = arr[middle][field];
		} else {
			current = arr[middle];
		}
		if (current === value) {
			// found the value
			return middle;
		} else if (current < value) {
			// continue searching to the right
			start = middle + 1;
		} else {
			// search searching to the left
			end = middle - 1;
		}
	}
	// not found
	return -1;
};
