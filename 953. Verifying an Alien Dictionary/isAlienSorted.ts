function isAlienSorted(words: string[], order: string): boolean {
	const orderMap = new Map();

	for (let i = 0; i < order.length; i++) {
		orderMap.set(order[i], i);
	}

	for (let i = 1; i < words.length; i++) {
		const curr = words[i];
		const prev = words[i - 1];
		if (orderMap.get(curr[0]) < orderMap.get(prev[0])) return false;
		if (curr[0] === prev[0]) {
			let pointer = 1;
			while (
				prev[pointer] === curr[pointer] &&
				pointer < Math.max(prev.length, curr.length)
			) {
				pointer++;
			}
			if (orderMap.get(prev[pointer]) > orderMap.get(curr[pointer])) {
				return false;
			}
			if (curr[pointer] === undefined && prev[pointer]) {
				return false;
			}
		}
	}
	return true;
}

// const words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// const words = ['word', 'world', 'row'],
// 	order = 'worldabcefghijkmnpqstuvxyz';
const words = ['apple', 'app'],
	order = 'abcdefghijklmnopqrstuvwxyz';
console.log(isAlienSorted(words, order));
