# TRANSACTION TRACKER OO

# Write out your Location class and methods

class Location 
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def transactions
    Transaction.all.select do |transaction|
      transaction.location == self
    end
  end

  def customers
    self.transactions.collect do |transaction|
      transaction.customer
    end.uniq
  end
end