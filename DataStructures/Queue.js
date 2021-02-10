
// Linked List 

class Node {
  constructor(value) {
    this.head = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null 
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.first = newNode
      this.last = newNode
    } else {
      const holdingPointer = this.last
      this.last = newNode
      holdingPointer.next = this.last
    }
    this.length++
    return this
  }

  dequeue() {
    if (!this.first) return null
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length--
    return this
  }
}

const myQueue = new Queue()
myQueue.enqueue('Matt')
myQueue.enqueue('John')
myQueue.enqueue('Steve')
myQueue.enqueue('Joe')
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

// console.log(myQueue)

// Stacks 

class StackQueue {
  constructor(value) {
    this.first = []
    this.last = []
  }

  enqueue(value) {
    const length = this.first.length
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    }
    this.last.push(value)
    return this
  }

  dequeue() {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop())
    }
    this.first.pop()
    return this
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0]
    }
    return this.first[this.first.length - 1]
  }
}

const myStackQueue = new StackQueue
myStackQueue.enqueue('Matt')
myStackQueue.enqueue('John')
myStackQueue.enqueue('Steve')
myStackQueue.enqueue('Joe')
myStackQueue.dequeue()
myStackQueue.dequeue()
myStackQueue.dequeue()

console.log(myStackQueue)