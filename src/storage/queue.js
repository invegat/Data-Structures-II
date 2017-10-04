/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
/* eslint-disable no-throw-literal */
class Queue {
  constructor() {
    this.storage = []
  }
  isEmpty() {
    return this.storage.length === 0;
  }
  get size() {
    return this.storage.length
  }
  enqueue(item) {
    this.storage.push(item)
  }
  dequeue() {
    if (this.storage.length) {
      return this.storage.shift()
    }
    return undefined
  }
}

module.exports = Queue;
