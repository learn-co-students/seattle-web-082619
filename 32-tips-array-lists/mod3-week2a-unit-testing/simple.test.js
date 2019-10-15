describe('Some simple tests', () => {
  it('should add numbers', () => {
    expect(1 + 2).toBe(3)
  })

  it('should add numbers', () => {
    let index = [0, 11, 22, 33, 44, 55].indexOf(22)
    expect(index).toBe(2)
  })

  it('should show you what a failure looks like', () => {
    let vegetables = ['asparagus', 'cucumber', 'ginger']
    let isFound = vegetables.includes('apple')
    expect(isFound).toBe(true)
  })
})
