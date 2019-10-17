let aa = [1,2,3,4,5]
for (let i = 0; i < aa.length; i++) {
  let item = aa[i]
  doSomething(item)
}

let names = ['alice', 'bob', 'carol']
for (let i = 0; i < names.length; i++) {
  let name = names[i]
  greet(name)
}

function doSomething(item) {
  console.log(item)
}

function greet(name) {
  console.log('Hello! My name is', name)
}