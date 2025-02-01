import contacts from "../data/contacts.js";

function binarySearch(array, target) {
	let high = array.length - 1;
	let low = 0;

	while (low <= high) {
		let mid = Math.floor((high + low) / 2);

		if (target.toLowerCase() == array[mid].name.toLowerCase()) {
			return mid;
		} else if (target.toLowerCase() < array[mid].name.toLowerCase()) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

let result = binarySearch(contacts, "Elijah Perez");
if (result == -1) {
	console.log("No results found");
} else {
	console.log("Data found at index:", result);
	console.log("Data: ", contacts[result]);
}
