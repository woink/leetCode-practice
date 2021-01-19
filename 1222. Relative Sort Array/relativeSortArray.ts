function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const numMap = new Map()
  arr2.forEach((a, i) => {
    numMap.set(a, i )
  });
  return arr1.sort((a, b) => {
    a = numMap.has(a) ? numMap.get(a) : arr2.length + a
    b = numMap.has(b) ? numMap.get(b) : arr2.length + b
    return a - b
  })  
}

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
	arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));
