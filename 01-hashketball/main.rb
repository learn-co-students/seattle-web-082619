def vet
  {
    :name => "PAWS Cat City",
    :cats => [
      {:name => "Goliath", :age => 2}, 
      {:name => "Angel", :age => 1}, 
      {:name => "Cow", :age => 7}, 
    ],
    :dogs => {
      "Jon Arbuckle" => {name: "Odie", age: 2},
      "Charlie Brown" => {name: "Snoopy", age: 5},
      "Farmer" => {name: "Old Yeller", age: 12}
    },
    1 => "First Cat",
    2 => "Second Cat"
  }
end

def total_dog_ages
  # owner is a string
  # dog is a hash like {:name, :age}
  vet[:dogs].reduce(0) do |sum, (owner, dog)|
    sum + dog[:age]
  end
end

# .each - visits each thing in an array
# .map / .collect - transforms each thing in an array to something else
# .select / .filter - pick only certain things from an array
# .find - find one thing from an array
# .find_all - find all things from an array
# .reduce - combines everything in an array into one result
# .sum - a convenience method to add all numbers in an array
def total_age
  ages = 0
  vet[:cats].each do |cat|
    ages += cat[:age]
  end
  return ages
end

def total_age_via_reduce
  vet[:cats].reduce(0) do |sum, cat|
    sum + cat[:age]
  end
end

def get_cat_names
  vet[:cats].map do |cat|
    cat[:name]
  end
end

puts "The cats at #{vet[:name]} have #{total_age_via_reduce} years of age all together."
puts "The dogs at #{vet[:name]} have #{total_dog_ages} years of age all together."
