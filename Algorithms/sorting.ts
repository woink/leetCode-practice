// Bubble Sort

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
		let min = i;
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

// Insertion Sort

function insertionSort(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < array[0]) {
			array.unshift(array.splice(i, 1)[0]);
		} else {
			for (let j = 1; j < i; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}
	return array;
}

// Divide and Conqure
// Merge Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): any {
	if (array.length === 1) {
		return array;
  }
  
  const half = Math.ceil(array.length / 2);
  const left = array.splice(0, half)
  const right = array.splice(-half)

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

const answer = mergeSort(numbers);
console.log(answer)


