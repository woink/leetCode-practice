function toLowerCase(str: string): string {
  const strArr = str.split('')

  for (let i = 0; i < str.length; i++) {
    const letterChar = str.charCodeAt(i)

    if (letterChar < 93 && letterChar > 64) {
      strArr[i] = String.fromCharCode(letterChar + 32)
    }     
  }

  return strArr.join('')
}
// const str = 'Hello'
// const str = 'here'
const str = 'LOVELY'
console.log(toLowerCase(str))
