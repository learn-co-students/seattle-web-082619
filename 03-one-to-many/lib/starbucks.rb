require 'pry'

class StarbucksCoffee
  attr_reader :type, :size, :capacity, :new_instance_variable
  attr_reader :another_variable_thats_never_defined

  def initialize(type, size)
    @type = type
    @size = size
    @capacity = size
  end

  def make_new_instance_variable
    @new_instance_variable = 99
  end

  # allow people to take a sip.
  # if they ever finish it the cup
  # stays at zero
  def sip  
    @size -= 1
    if @size < 0
      @size = 0
    end
  end

  def to_s
    "#{@type} with #{@size} left of #{@capacity}"
  end
end
