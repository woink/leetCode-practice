function numIdenticalPairs(nums: number[]): number {
  let goodPair = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length;j ++) {
      if (nums[i] == nums[j] && i < j){
        goodPair++
      }
    }
  }
  return goodPair
}

const nums = [1, 2, 3, 1, 1, 3]
console.log(numIdenticalPairs(nums))