function shuffle(nums: number[], n: number): number[] {
  const ans = [nums[0], nums[n]];
    
  for (let i = 1; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }
  
  return ans;
}

const nums = [1,2,3,4,4,3,2,1], n = 4

console.log('shuffle: ', shuffle(nums, n))