function singleNumber(nums: number[]): any {
  let freq = new Set<number>()
  
  for (const num of nums) {
    if (freq.has(num)) {
      freq.delete(num)
    } else {
      freq.add(num)
    }
  }
  return [...freq][0]
};

console.log(singleNumber([2, 2, 1]))