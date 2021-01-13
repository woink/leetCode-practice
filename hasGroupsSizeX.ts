function hasGroupsSizeX(deck: number[]): boolean {
  if (deck.length === 1) return false

  const map = new Map()

  for (let i = 0; i < deck.length; i++) {
    if (map.has(deck[i])) map.set(deck[i], map.get(deck[i]) + 1)
    if (!map.has(deck[i])) map.set(deck[i], 1)
  }

  const vals = [...map.values()]
  const g = vals[0]

  for (let i = 0; i < vals.length; i++) {
    if (vals.every(el => el % i === 0)) return true
  }

  return false
}

const deck = [1,1,2,2,2,2]
console.log(hasGroupsSizeX(deck))

const deck2 = [1,1,1,2,2,2,3,3]
console.log(hasGroupsSizeX(deck2))

const deck3 = [1]
console.log(hasGroupsSizeX(deck3))

const deck4 = [1, 1]
console.log(hasGroupsSizeX(deck4))

// should be false
const deck5 = [1,1,1,2,2,2,3,3]
console.log(hasGroupsSizeX(deck5))
