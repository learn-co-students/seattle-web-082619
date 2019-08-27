# name, tea price
class Boba
  attr_reader :name, :tea, :price, :sales
  attr_writer :name, :tea, :price, :sales
  attr_accessor :name, :tea, :price, :sales

  @@all = []

  def initialize(name, tea, price)
    @name = name
    @tea = tea
    @price = price
    @sales = 0

    foo = "bar"

    @@all << self
  end

  def Boba.all
    @@all
  end

  def sell
    @sales += 1
  end

  def profit
    @sales * @price 
  end

  # provide a custom definition of a to string method
  def to_s
    str = "#{@name} sells #{@tea} for $#{@price}\n"
    str << "This place has made $#{profit}"
    str
  end
end