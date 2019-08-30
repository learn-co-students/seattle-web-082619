# TRANSACTION TRACKER OO

# Write out your customer class and methods

class Customer 
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def transactions
    Transaction.all.filter do |transaction|
      transaction.customer == self
    end
  end

  def locations
    self.transactions.map do |transaction|
      transaction.location
    end
  end

  def total_spent
    self.transactions.reduce(0) do |sum, n|
      sum + n.amount
    end
  end

  def average_spent
    self.total_spent / self.transactions.length.to_f
  end
end
