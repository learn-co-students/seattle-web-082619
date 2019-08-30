# TRANSACTION TRACKER OO

# Write out your transaction class and methods

class Transaction
  attr_reader :customer, :location, :amount

  @@all = []

  def initialize(customer, location, amount)
    @customer = customer
    @location = location
    @amount = amount
    @@all << self
  end

  def self.all
    @@all
  end

end
