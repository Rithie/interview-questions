// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next

    return {
      data: this.data,
      next: this.next,
    }
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  size() {
    let total = 0
    let node = this.head

    while(node) {
      total += 1
      node = node.next
    }

    return total
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.removeAt(0)
  }

  removeLast() {
    this.removeAt(this.size() - 1)
  }

  insertLast(data) {
    if(!this.head) {
      return this.insertFirst(data)
    }

    let node = this.getLast()

    node.next = new Node(data)
  }

  getAt(index) {
    if(!this.head) {
      return null
    }

    let node = this.head
    let counter = 0

    while(node) {
      if(counter === index) {
        return node
      } else {
        counter += 1
        node = node.next
      }
    }

    return null
  }

  removeAt(index) {
    if(!this.head) {
      return
    }

    if(index === 0) {
      this.head = this.head.next
    }

    const previous = this.getAt(index - 1)

    if(!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data)
      return
    }

    if(index <= 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previous = this.getAt(index - 1)

    if(!previous) {
      this.insertLast(data)
      return
    }

    previous.next = new Node(data, previous.next)
  }

  forEach(fn) {
    let node = this.head

    while(node) {
      fn(node)
      node = node.next
    }
  }

  map(fn) {
    let node = this.head

    while(node) {
      node.data = fn(node.data)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head

    while(node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
