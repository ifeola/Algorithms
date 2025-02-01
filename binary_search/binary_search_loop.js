function binarySearch(array, target) {
	let high = array.length - 1;
	let low = 0;

	while (low <= high) {
		let mid = Math.floor((high + low) / 2);

		if (target == array[mid]) {
			return mid;
		} else if (target < array[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

let result = binarySearch(numbers, 3);
if (result == -1) {
	console.log("No results found");
} else {
	console.log("Data found at index:", result);
}
