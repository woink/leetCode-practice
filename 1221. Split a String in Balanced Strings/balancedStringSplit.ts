function balancedStringSplit(s: string): number {
	let markLetter = s[0],
		first = 0,
		second = 0,
		count = 0;

	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		if (markLetter === letter) first++;
		if (markLetter !== letter && first !== second) second++;
		if (markLetter !== letter && first === second) {
			markLetter = s[i + 1];
			count++;
		}
	}
	return count;
}

const s = 'RLRRLLRLRL';
console.log(balancedStringSplit(s));
