require_relative '../config/environment'

ulysses = Book.new("Ulysses", "James Joyce", "Epic", 899)
gatsby = Book.new("The Great Gatsby", "Scott Fitzgerald", "Drama", 180)
moby_dick = Book.new("Moby Dick", "Herman Melville", "Action", 1400)

lotr1 = Book.new("The Fellowship of the Ring", "JRR", "Fantasy", 899)
lotr2 = Book.new("The Two Towers", "JRR", "Fantasy", 899)
lotr3 = Book.new("Return of the King", "JRR", "Fantasy", 899)

puts "I own #{Book.size_of_library} many books"
puts "These are the books I own:"
Book.all.each do |book|
  puts "#{book.title} by #{book.author}"
end
puts

puts "This is the longest book I own"
longest = Book.longest_book
puts "#{longest.title} by #{longest.author} with #{longest.pages} pages"
puts

puts "This is the author I own the most books of that they wrote on pages"
puts Book.favorite_author
puts

my_bookshelf = Bookshelf.new
obamas_bookshelf = Bookshelf.new

my_bookshelf.add_book(lotr1)
my_bookshelf.add_book(lotr2)
my_bookshelf.add_book(lotr3)

three_body_problem = Book.new("Three Body Problem", "Chixien Liu", "Sci Fi", 650)

my_bookshelf.add_book(three_body_problem)
obamas_bookshelf.add_book(three_body_problem)

binding.pry