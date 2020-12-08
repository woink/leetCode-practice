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