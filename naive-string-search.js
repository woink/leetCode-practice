// define function that takes a long and short string
// loop over the longer string
// if the chars don't match, break out of inner loop
// if the chars match, keep going 
// if inner loop completes, increment the count of matches
// return the count

function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // long[i + j] ens ures iteration will go through and reset the short word
      if (short[j] !== long[i + j]) break
      if (j = short.length -1) count++
    }
  }
  console.log(count)
}


naiveSearch("world hello", "hello")