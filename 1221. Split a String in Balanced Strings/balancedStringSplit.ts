const s = 'RLRRLLRLRL';

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

console.log(balancedStringSplit2(s));

function balancedStringSplit2(s: string): number {
	let count = 0,
		match = 0;

	s.split('').map((c) => {
		if (c === 'R') count++;
		if (c === 'L') count--;
		if (count === 0) match++;
	});
	return match;
}

console.log(balancedStringSplit2(s));
