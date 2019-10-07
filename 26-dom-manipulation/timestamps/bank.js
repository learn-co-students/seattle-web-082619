class Bank {
  constructor(balance) {
    this.balance = balance
  }

  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount
      return amount
    }
    return 0
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount
    }
    return this.balance
  }
}