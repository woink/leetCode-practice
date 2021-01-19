function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsArr = jewels.split(''),
    stonesArr = stones.split(''),
    lookup = new Map()
  let count = 0

  for (const stone of stonesArr) {
    if (lookup.has(stone)) {
      lookup.set(stone, lookup.get(stone) + 1)
    } else {
      lookup.set(stone, 1)
    }
  }

  for (const jewel of jewelsArr) {
    if (!lookup.get(jewel)) {
      count += 0
    } else {
      count += lookup.get(jewel)
    }
  }

  return isNaN(count) ? 0 : count
}

// const jewels = "aA", stones = "aAAbbbb"

// const jewels = "z", stones = "ZZ"

const jewels = "ebd", stones = "bbb"

console.log(numJewelsInStones(jewels, stones))

function numJewelsInStones2(jewels: string, stones: string): number {
  let count = 0

  for (const stone of stones) {
    if (jewels.includes(stone)) count++
  }
  return count
}