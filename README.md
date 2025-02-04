# JavaScript Algorithms

This project contains implementations of various algorithms in JavaScript, including binary search and sorting algorithms. The project is organized into different directories based on the type of algorithm.

## Project Structure

.vscode/ settings.json binary_search/ binary_search_loop.js binary_search_recursion.js data/ contacts.js names.js sorting_algorithm/ index.js quicksort.js selectionSort.js

### Directories and Files

- **binary_search/**: Contains implementations of binary search algorithms.

  - `binary_search_loop.js`: Binary search using a loop.
  - `binary_search_recursion.js`: Binary search using recursion.

- **data/**: Contains sample data used by the algorithms.

  - `contacts.js`: A list of contact objects with `name`, `phone`, and `email` properties.
  - `names.js`: A list of names.

- **sorting_algorithm/**: Contains implementations of sorting algorithms.

  - `index.js`: Contains various utility functions and examples of sorting and searching algorithms.
  - `quicksort.js`: Implementation of the Quicksort algorithm.
  - `selectionSort.js`: Implementation of the Selection Sort algorithm.

- **.vscode/**: Contains Visual Studio Code settings.
  - `settings.json`: Configuration for the editor.

## Usage

### Binary Search

#### Loop Implementation

```sh
node binary_search/binary_search_loop.js
```

## Recursion Implementation

```sh
node binary_search/binary_search_recursion.js
```

## Sorting Algorithms

### Quicksort

```sh
node sorting_algorithm/selectionSort.js
```

Data
The data used in the algorithms is located in the data directory.

- contacts.js: Contains a list of contact objects.
- names.js: Contains a list of names.

## VSCode Settings

The project includes a settings.json file with the following settings:

- window.zoomLevel: Sets the zoom level of the window.
- editor.fontSize: Sets the font size in the editor.
- debug.console.fontSize: Sets the font size in the debug console.
- editor.mouseWheelZoom: Enables zooming with the mouse wheel in the editor.
- terminal.integrated.mouseWheelZoom: Enables zooming with the mouse wheel in the terminal.
