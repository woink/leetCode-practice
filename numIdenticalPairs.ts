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

function numIdenticalPairs2(nums: number[]): number {
  const map = new Map()
  let pairs = 0

  for (const num of nums) {
    if (map.has(num)) {
      pairs += map.get(num)
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  return pairs
}

console.log(numIdenticalPairs2(nums))