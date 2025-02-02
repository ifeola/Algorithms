// const months = [
// 	"December",
// 	"March",
// 	"June",
// 	"February",
// 	"October",
// 	"January",
// 	"May",
// 	"September",
// 	"November",
// 	"August",
// 	"July",
// 	"April",
// ];

const contacts = [
	{
		name: "Sophia Turner",
		phone: "555-1234",
		email: "sophia.turner@example.com",
	},
	{ name: "Liam Smith", phone: "555-5678", email: "liam.smith@example.com" },
	{
		name: "Olivia Brown",
		phone: "555-8765",
		email: "olivia.brown@example.com",
	},
	{
		name: "Noah Johnson",
		phone: "555-4321",
		email: "noah.johnson@example.com",
	},
	{ name: "Emma Davis", phone: "555-1111", email: "emma.davis@example.com" },
	{
		name: "Aiden Wilson",
		phone: "555-2222",
		email: "aiden.wilson@example.com",
	},
	{
		name: "Isabella Martinez",
		phone: "555-3333",
		email: "isabella.martinez@example.com",
	},
	{
		name: "Lucas Garcia",
		phone: "555-4444",
		email: "lucas.garcia@example.com",
	},
	{ name: "Mia Taylor", phone: "555-5555", email: "mia.taylor@example.com" },
	{ name: "Ethan Moore", phone: "555-6666", email: "ethan.moore@example.com" },
	{
		name: "Ava Anderson",
		phone: "555-7777",
		email: "ava.anderson@example.com",
	},
	{
		name: "Mason Thomas",
		phone: "555-8888",
		email: "mason.thomas@example.com",
	},
	{
		name: "Charlotte Lee",
		phone: "555-9999",
		email: "charlotte.lee@example.com",
	},
	{
		name: "Elijah Perez",
		phone: "555-1010",
		email: "elijah.perez@example.com",
	},
	{
		name: "Amelia Thompson",
		phone: "555-2020",
		email: "amelia.thompson@example.com",
	},
];

function getFirstData(data) {
	let item = data[0];
	let itemIndex = 0;

	for (let index = 1; index < data.length; index++) {
		let contact = data[index];
		if (item.name.toLowerCase() > contact.name.toLowerCase()) {
			item = contact;
			itemIndex = index;
		}
	}

	return itemIndex;
}

function selectionSort(data) {
	let newData = [];
	let size = data.length;

	for (let i = 0; i < size; i++) {
		let firstDataIndex = getFirstData(data);
		let firstData = data.splice(firstDataIndex, 1);
		newData = [...newData, firstData];
	}

	return newData;
}

// let result = selectionSort(contacts);
// console.log(result);

/* function power(a, b) {
	if (b == 0) return 1;
	else if (b == 1) return a;

	return a * power(a, b - 1);
}

let result = power(2, 4);
console.log(result); */

function fibonnaci(n, array = {}) {
	if (n in array) return array[n];
	if (n == 0) return 0;
	if (n == 1) return 1;

	array[n] = fibonnaci(n - 1) + fibonnaci(n - 2);
	return array[n];
}

// let result = fibonnaci(64);
// console.log(result);

// function addition(array) {
// 	if (array.length == 0) return 0;
// 	if (array.length == 1) return array[0];
// 	return array[0] + addition(array.slice(1));
// }

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// let result = addition(numbers);
// console.log(result);

/* function totalLengthRecursion(array) {
	if (array.length == 0) return 0;
	if (array.length == 1) return array[0].length;

	return array[0].length + totalLengthRecursion(array.slice(1));
}

let test = ["ab", "c", "defgh"];
let result = totalLengthRecursion(test);
console.log(result); */

function summation(array) {
	if (array.length == 0) return 0;
	if (array.length == 1) return array[0];

	return array[0] + summation(array.slice(1));
}

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// let result = summation(numbers);
// console.log(result);

function arrayLength(array) {
	if (array.length == 0) return 0;
	if (array.length == 1) return 1;

	return 1 + arrayLength(array.slice(1));
}

// 1 + [20, 30, 40, 50, 60, 70]
// 1 + [30, 40, 50, 60, 70]
// 1 + [40, 50, 60, 70]
// 1 + [50, 60, 70]
// 1 + [60, 70]
// 1 + [70]
// 1

// let numbers = [50, 30, 10, 90, 20, 40, 70, 100, 80, 60, 2000];
// let result = arrayLength(numbers);
// console.log(result);

/* function findMaxNum(array) {
	if (array.length == 0) return 0;
	if (array.length == 1) return array[0];

	let firstNumber = array[0];
	let remainingNumbers = findMaxNum(array.slice(1));
	return firstNumber > remainingNumbers ? firstNumber : remainingNumbers;
}
let result = findMaxNum(numbers);
console.log(result); */

/* function binarySearchRecursion(array, low, high, target) {
	if (low > high) return -1;

	let mid = Math.floor((high + low) / 2);
	if (array[mid] == target) return mid;
	else if (target < array[mid]) {
		return binarySearchRecursion(array, low, mid - 1, target);
	} else {
		return binarySearchRecursion(array, mid + 1, high, target);
	}
}

let numbers = [10, 20, 30, 40, 50, 60, 70];
let result = binarySearchRecursion(numbers, 0, numbers.length - 1, 30);
console.log(result); */

function linearSearch(array, target) {
	if (array.length == 0) return -1;

	let firstNumberIndex = 0;
	let firstNumber = array[firstNumberIndex];

	if (firstNumber == target) return firstNumberIndex;
	else return firstNumberIndex + 1 + linearSearch(array.slice(1), target);
}

let numbers = [10, 20, 30, 40, 50, 60, 70];
let result = linearSearch(numbers, 70);
console.log(result);
