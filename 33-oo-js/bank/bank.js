class BankAccount {
  constructor() {
    this._balance = 1000
  }

  // the 'get' keyword allows us to define a function
  // that we can access as if it were a property
  // like: bb.balance << notice there's no parens there
  get balance() {
    console.log('running get balance()')
    return this._balance
  }

  // access this with bb.balance2() << notice the parens
  balance2() {
    return this._balance
  }

  // account.setBalance(-9800)
  setBalance(value) {
    if (value < 0) return
    this._balance = value
  }

  // let's make sure no one can ever set the balance to
  // be less than zero.
  // this prevents things like
  // account.balance = -9800
  set balance(value) {
    if (value < 0) return
    this._balance = value
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount
      return amount
    }
    return 0
  }

  deposit(amount) {
    if (amount < 0) {
      return 0
    }
    this._balance += amount
  }
}

let account = new BankAccount()
console.log('starts with:', account.balance)
account.withdraw(700)
account.withdraw(450)
console.log(account.balance)

account.balance = -9800
console.log(account.balance)

account._balance = -9800
console.log(account.balance)