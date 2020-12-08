function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

// console.log(power(5, 3))

function factorial(num) {
  if (num === 0) return 1
  return num * factorial(num - 1)
}

console.log(factorial(4))