function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  // find the first element of arr2 in arr1
  // slice the arr1 and then place arr2 in 
  const set = new Set<number>(arr1)

  for (const num of arr1) {
    if (set.has(arr2[0])) {
      
    }
  }
  
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2,1,4,3,9,6]

console.log(relativeSortArray(arr1, arr2))