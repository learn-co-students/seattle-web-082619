 # TRANSACTION TRACKER OO

require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

c1 = Customer.new('David')
c2 = Customer.new('Steve')
c3 = Customer.new('Ellie')

l1 = Location.new('Pane Pane')
l2 = Location.new('Chipotle')
l3 = Location.new('Target')
l4 = Location.new('Mud Bay')

t1 = Transaction.new(c1, l1, 10)
t2 = Transaction.new(c2, l2, 8)
t3 = Transaction.new(c1, l2, 9)
t4 = Transaction.new(c1, l1, 11)
t5 = Transaction.new(c2, l3, 36)
t6 = Transaction.new(c3, l4, 22)
Transaction.new(c1, l2, 1)

binding.pry
0






















