function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
	const word1Join = word1.join(''),
		word2Join = word2.join('');

	if (word1Join.length !== word2Join.length) return false;
	for (let i = 0; i < word1Join.length; i++) {
		if (word1Join[i] !== word2Join[i]) return false;
	}
	return true;
}

// const word1 = ['ab', 'c'],
// 	word2 = ['a', 'bc'];
// const word1 = ['a', 'cb'],
// 	word2 = ['ab', 'c'];
const word1 = ['abc', 'd', 'defg'],
	word2 = ['abcddefg'];
console.log(arrayStringsAreEqual(word1, word2));
