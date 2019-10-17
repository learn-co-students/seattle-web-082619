function map(aa, cb) {
  let mapped = []
  for (let i= 0; i < aa.length; i++) {
    let item = aa[i]
    let mappedValue = cb(item)
    mapped.push(mappedValue)
  }
  return mapped
}

let nums = [1, 2, 3, 4, 5]
let squared = map(nums, (num) => {
  return num * num
})
console.log(squared)
