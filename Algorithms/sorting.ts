// Bubble Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				const temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}

// Selection Sort

function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let min = i
		const temp = array[i];
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

selectionSort(numbers);
console.log(numbers);
