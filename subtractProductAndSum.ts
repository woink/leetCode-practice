function subtractProductAndSum(n: number): number {
  let nProduct = 1,
    nSum = 0
  
  for (const num of n.toString()) {
    nProduct *= +num
    nSum += +num
  }
  return nProduct - nSum
};

let n = 234
console.log(subtractProductAndSum(n))