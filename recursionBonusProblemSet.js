function reverse(str) {
  if (str.length <= 1) return str
  console.log(str)
  return reverse(str.slice(1)) + str[0]
}

// console.log(reverse("hello world"))

function isPalindrome(str) {
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}

console.log(isPalindrome('awesome'))

function someRecursive(array, callback) {
  if (array.length === 0) return false
  if (callback(array[0])) return true
  return someRecursive(array.slice(1), callback)
}

console.log(someRecursive([1, 2, 3, 4, 11], val => val > 10))