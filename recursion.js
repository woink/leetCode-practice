function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

console.log(sumRange(10))
  
// INITIATE STACK
// return 3 + sumRange(2)
//   return 2 + sumRange(1)
//     return 1

// CYCLE BACK THROUGH STACK
// return 3 + sumRange(2)
//   return 2 + 1

// return 3 + 3

// return 6


// Factorial
function factorial(num) {
  let total = 1
  for (let i = num; i > 1; i--){
    total *= i
  }
  return total
}

console.log(factorial(3))


// Factorial using Recursion
function factorialRecur(num) {
  if (num === 1) return 1
  return num * factorialRecur(num - 1)
}

console.log(factorialRecur(3))