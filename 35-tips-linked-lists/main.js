class ListNode {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

her = new ListNode("Her")
it = new ListNode("It")
ai = new ListNode("AI")
threeHundred = new ListNode("300")
up = new ListNode("Up")

threeHundred.next = her
her.next = it
it.next = up
up.next = ai

let front = threeHundred

let current = front
while (current !== null) {
  console.log(current.data)
  current = current.next
}

let aa = [23, 63, 23, 64]
let sum = 0
for (let i = 0; i < aa.length; i++) {
  sum += aa[i]
}

let n1 = new ListNode(23)
let n2 = new ListNode(63)
let n3 = new ListNode(23)
let n4 = new ListNode(64)

n1.next = n2
n2.next = n3
n3.next = n4
let frontOfNumbers = n1

let sum2 = 0
let current = frontOfNumbers
while (current !== null) {
  sum2 += current.data
  current = current.next
}

debugger



