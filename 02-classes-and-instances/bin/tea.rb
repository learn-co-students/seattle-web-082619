require_relative '../config/environment'

boba_guys = Boba.new("Boba Guys", "Green", 1)
oasis = Boba.new("Oasis", "Ocean Raspberry", 2.50)
boba_saur = Boba.new("Boba Saur", "Mango Shock", 2.25)


puts "Here's all the Boba places in town:"
Boba.all.each do |boba|
  puts boba.name
end
puts

oasis.sell
oasis.sell
oasis.sell
oasis.sell
oasis.sell

boba_guys.sell
boba_guys.sell
boba_guys.sell
boba_guys.sell

boba_saur.sell
boba_saur.sell
boba_saur.sell

puts boba_guys
puts oasis
puts boba_saur