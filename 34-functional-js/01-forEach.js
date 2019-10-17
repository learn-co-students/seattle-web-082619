function forEach(aa, cb) {
  for (let i = 0; i < aa.length; i++) {
    let item = aa[i]
    cb(item)
  }
}

let aa = [1,2,3,4,5]
forEach(aa, doSomething)

let names = ['alice', 'bob', 'carol']
forEach(names, greet)

function doSomething(item) {
  console.log(item)
}

function greet(name) {
  console.log('Hello! My name is', name)
}