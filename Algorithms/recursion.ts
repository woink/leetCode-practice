let counter = 0;
function inception(): string {
	if (counter > 3) {
		return 'done!';
	}
	counter++;
	return inception();
}

/*
 1. Identify the base case
 2. Identify the recursive case
 3. Get closer and closer and return when needed. Usually have 2 returns for the base case and the recursive case
*/

//Factorial

function findFactorialRecursive(number: number): number {
	if (number === 2) return 2;
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number: number): number {
	let total = 1;
	for (let i = 2; i <= number; i++) {
		total *= i;
	}
	return total;
}

//Fibonacci

function fibonacciIterative(n: number): number {
	// O(n)
	const arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
}

function fibonacciRecursive(n: number): number {
	// O(2^n)
	if (n < 2) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/*
  Every time you are using a tree or converting something into a tree, consider recursion
    1. Divided into a number of subproblems that are smaller instances of the same problem.
    2. Each instance of the subproblem is identical in nature
    3. The solutions of each subproblem can be combined to solve the problem at hand.
*/

function reverseString(str: string): string {
	const strArr = str.split('');
	let result = '';
	for (let i = str.length - 1; i > 0; i--) {
		result += strArr[i];
	}
	return result;
}

function reverseStringRecursive(str: string): string {
  if (str === '') return ''
  return reverseString(str.substr(1)) + str.charAt(0)
}

console.log(reverseString('yoyo mastery'));
console.log(reverseStringRecursive('yoyo mastery'));

// Anything you do with recursion can be done with a loop