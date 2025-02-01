import contacts from "../data/contacts.js";

function binarySearchRecursion(array, low, high, target) {
	if (low > high) return -1;

	let mid = Math.floor((high + low) / 2);
	target = target.toLowerCase();

	if (target == array[mid].name.toLowerCase()) {
		return mid;
	} else if (target < array[mid].name.toLowerCase()) {
		return binarySearchRecursion(array, low, mid - 1, target);
	} else {
		return binarySearchRecursion(array, mid + 1, high, target);
	}
}

let result = binarySearchRecursion(
	contacts,
	0,
	contacts.length - 1,
	"Elijah Perez"
);

if (result == -1) {
	console.log("No results found");
} else {
	console.log("Data found at index:", result);
	console.log("Data: ", contacts[result]);
}
