// function removeVowels(s: string): string {
//   const vowels = ['a', 'e', 'i', 'o', 'u'],
//     sArr = s.split('')

//   for (let i = 0; i < sArr.length; i++) {
//     const letter = sArr[i]
//     for (const vowel of vowels) {
//       if (letter === vowel) {
//         sArr.splice(i, 1)
//         i--
//       }
//     }
//   }
//   return sArr.join('')
// }

function removeVowels(s: string): string {
  
  interface IVowel {
    [letter: string]: boolean
  }
  
  const vowels: IVowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  
  return [...s].reduce((acc, letter) => vowels[letter] ? acc : acc + letter, '')
}

const s = 'aeiou';
console.log(removeVowels(s));
