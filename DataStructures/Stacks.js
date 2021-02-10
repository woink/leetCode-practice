// Linked List

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.length) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.pop) return null;
		if (this.top === this.bottom) {
			this.bottom = null;
		}
		this.top = this.top.next;
		this.length--;
		return this;
	}

	isEmpty() {}
}

const myStack = new Stack();
myStack.push('google');
myStack.push('apple');
myStack.push('discord');
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);

// Array

class ArrayStack {
  constructor() {
    this.array = []
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }
}

const myArrayStack = new ArrayStack();
myArrayStack.push('google');
myArrayStack.push('apple');
myArrayStack.push('discord');
myArrayStack.pop();
myArrayStack.pop();
myArrayStack.pop();

console.log(myArrayStack)