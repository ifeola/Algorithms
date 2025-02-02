import names from "../data/names.js";

function getFirstElement(array) {
	let firstElement = array[0];
	let firstElementIndex = 0;

	for (let index = 1; index < array.length; index++) {
		let nextElement = array[index];
		if (firstElement > nextElement) {
			firstElement = nextElement;
			firstElementIndex = index;
		}
	}

	return firstElementIndex;
}

function selectionSort(array) {
	let neweNames = [];
	const SIZE = array.length;

	for (let index = 0; index < SIZE; index++) {
		let firstElementIndex = getFirstElement(array);
		let firstName = array.splice(firstElementIndex, 1);
		neweNames = [...neweNames, firstName];
	}

	return neweNames;
}

let result = selectionSort(names);
console.log(result);
