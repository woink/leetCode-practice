function smallerNumbersThanCurrent(nums: number[]): number[] {
  const result = []
  let count = 0
  
  for (const i of nums) {
    for (const j of nums) {
      if (i > j) count++
    }
    result.push(count)
    count = 0
  }
  return result
}
