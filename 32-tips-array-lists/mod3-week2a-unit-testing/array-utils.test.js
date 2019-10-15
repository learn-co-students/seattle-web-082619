const arrayUtils = require('./array-utils')
const isUnique = arrayUtils.isUnique

describe('isUnique', () => {
  it('empty arrays are unique', () => {
    let empty = []
    expect(isUnique(empty)).toBe(true)
  })

  it('single element arrays are unique', () => {
    let one = [44]
    expect(isUnique(one)).toBe(true)
  })

  it('two unique items', () => {
    let two = [1,2]
    expect(isUnique(two)).toBe(true)
  })

  it('two dupe items', () => {
    let ones = [1,1]
    expect(isUnique(ones)).toBe(true)
  })

  it('many unique items', () => {
    let many = [1,2,3,4,5,6,7,8,9]
    expect(isUnique(many)).toBe(true)
  })

  it('many items w/ dupe', () => {
    let aa = [1,2,3,4,5,6,7,7,8,9]
    expect(isUnique(aa)).toBe(true)
  })
})
