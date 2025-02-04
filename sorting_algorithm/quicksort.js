import names from "../data/names.js";

function quickSortAlgorithm(array) {
	if (array.length < 2) return array;

	let left = [];
	let right = [];
	let pivot = array[0];

	for (let index = 1; index < array.length; index++) {
		if (pivot > array[index]) {
			left = [...left, array[index]];
		} else {
			right = [...right, array[index]];
		}
	}

	return [...quickSortAlgorithm(left), pivot, ...quickSortAlgorithm(right)];
}

let result = quickSortAlgorithm(names);
console.table(result);

/* Explanation:
Base Case:
If the array has 0 or 1 elements, it is already sorted, so return it as is.

Pivot Selection:
Choose a pivot element. In this implementation, the last element of the array is used as the pivot.

Partitioning:
Create two empty arrays, left and right.
Iterate through the array (excluding the pivot) and place elements less than the pivot in the left array and elements greater than or equal to the pivot in the right array.

Recursive Sorting:
Recursively apply the Quicksort algorithm to the left and right sub-arrays.
Combine the sorted left array, the pivot, and the sorted right array into a single sorted array.

Example Walkthrough:
For the input [3, 6, 8, 10, 1, 2, 1]:
Pivot = 1 (last element).

Partition:
left = [] (no elements less than 1).
right = [3, 6, 8, 10, 1, 2].

Recursively sort left and right:
left is already sorted ([]).

Sort right:
Pivot = 2.
Partition:
left = [1].
right = [3, 6, 8, 10].

Recursively sort left and right:
left is already sorted ([1]).
Sort right:
Pivot = 10.
Partition:
left = [3, 6, 8].
right = [].

Recursively sort left:
Pivot = 8.
Partition:
left = [3, 6].
right = [].

Recursively sort left:
Pivot = 6.
Partition:
left = [3].
right = [].

Combine: [3, 6].
Combine: [3, 6, 8].
Combine: [3, 6, 8, 10].
Combine: [1, 2, 3, 6, 8, 10].
Combine: [1, 1, 2, 3, 6, 8, 10].

Time Complexity:
Best/Average Case: O(n log(n))
Worst Case: O(n^2)
O(n^2) (occurs when the pivot is consistently the smallest or largest element, e.g., when the array is already sorted and the pivot is chosen poorly). */
