// Simple Recursion w/ helper method
function collectOddsValues(arr) {
  let result = [];
  
  function helper(helperInput) {
    
		if (helperInput.length === 0) {
			return;
    }
    
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
    }
    
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

// console.log("odd values: ", collectOddsValues([...Array(12).keys()]))


// Pure Recursion
function collectOddsValues2(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddsValues2(arr.slice(1)))
  return newArr
}

console.log(collectOddsValues2([...Array(30).keys()]))
// [1].concat(collectOddsValues2([2, 3, 4, 5]))
//   [].concat(collectOddsValues2([3, 4, 5]))
//     [3].concat(collectOddsValues2([4, 5]))
//       [].concat(collectOddsValues2([5]))
//         [5]