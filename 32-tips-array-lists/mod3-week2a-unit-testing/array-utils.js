function isUnique(aa) {
  let seen = {}
  for (let i = 0; i < aa.length; i++) {
    if (seen[aa]) {
      return false
    }
  }
  return true
}

module.exports = {
  isUnique: isUnique
}
