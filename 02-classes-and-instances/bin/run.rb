require_relative '../config/environment'

puts "I'm opening a bank account with $800"
savings = BankAccount.new(800)
puts "I now have #{savings.amount}"
puts

puts "I got paid $120"
savings.deposit(120)
puts "I now have #{savings.amount}"
puts

puts "I'm buying a bike for $400"
savings.withdraw(400)
puts "I now have #{savings.amount}"
puts

puts "I'm trying to take 20,000 out to buy a car"
savings.withdraw(20_000)
puts "I now have #{savings.amount}"
puts

puts "I'm trying to cheat and sneak money in"
savings.amount = 99_999
puts "I now have #{savings.amount}"
