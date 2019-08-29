matrix = Movie.new("Matrix", 1999)
titanic = Movie.new("Titanic", 1999)
top_gun = Movie.new("Top Gun", 1999)
mission_impossible = Movie.new("Mission Impossible", 1999)

keanu = Actor.new("Keanu", "Reeves")
tom_cruise = Actor.new("Tom", "Cruise")
alec = Actor.new("Alec", "Baldwin")
steven = Actor.new("Steven", "Baldwin")

# tom cruise in Top Gun
# tom cruise in Mission Impossible
Role.new(top_gun, tom_cruise, "Goose")
Role.new(mission_impossible, tom_cruise, "Han Hunt")

Role.new(matrix, keanu, "Neo")