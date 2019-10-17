class ListNode {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null
    this.tail = null
  }

  prepend(data) {
    let node = new ListNode(data)
    node.next = this.root
    this.root = node
  }

  append() {
    let node = new ListNode(data)
    this.tail.next = node
    this.tail = node
  }

  slowAppend(data) {
    let node = new ListNode(data)
    let current = this.root
    // stop current at the last node so
    // we still have a reference to a node
    // and don't step completely off the list
    while (current.next !== null) {
      current = current.next
    }
    current.next = node
  }

  // returns true if the value is anywhere in the list
  contains(value) {
    let current = this.root
    while (current !== null) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  // returns the data at the index, assuming
  // the index is zero-based like an array
  get(index) {
    let node = this._findNodeAtIndex(index)
    if (node !== null) {
      return node.data
    }
  }

  set(index, value) {
    let node = this._findNodeAtIndex(index)
    if (node !== null) {
      node.data = value
    }
  }

  _findNodeAtIndex(index) {
    let counter = 0
    let current = this.root
    while (current !== null) {
      if (counter === index) {
        return current
      }
      counter++
      current = current.next
    }
    return null
  }
}

// ListNode { data, next }
// 
// start: front > 300 > AI > Up > Her > It
//   end: front > Rushmore > 300 > AI > Up > Her > It
// 
// let node = new ListNode("Rushmore")
// front.next = node
let n300 = new ListNode("300")
let ai = new ListNode("ai")
let up = new ListNode("up")
let her = new ListNode("her")
let it = new ListNode("it")

n300.next = ai
ai.next = up
up.next = her
her.next = it

let list = new LinkedList()
list.root = n300

list.prepend('Rushmore')
