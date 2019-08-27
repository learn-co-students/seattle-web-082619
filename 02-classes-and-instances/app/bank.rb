# a class is a definition of data and functionality
# or, methods that manipulate that data.
# A string is an object, an array is an object, everything is!
# The data of a string is the letters
# the functionality, or the methods, on a string are ways to manipulate
# those letters like upper-casing them all or splitting them at spots.
# Classes allow us to create our own objects with our own data and
# methods to manipulate that data.
class BankAccount
  def initialize(amount)
    @amount = amount
  end

  # a getter method
  def amount
    @amount
  end

  # a setter method
  def amount=(val)
    @amount = val
  end

  def deposit(amount)
    # simply return from the function to exit and not allow
    # people to deposit negative amounts
    if amount < 0
      return
    end
    @amount += amount
  end

  def withdraw(amount)
    if amount > @amount
      return
    end
    @amount -= amount
  end
end