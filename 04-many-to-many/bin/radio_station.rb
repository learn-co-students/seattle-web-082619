require_relative '../config/environment'

johnny_cash = Artist.new("Johnny Cash")
elvis = Artist.new("Elvis")

# if we pass in just the String "Johnny Cash" that doesn't
# bring as much information as the Artist instance object
# ring_of_fire = Song.new("Ring of Fire", "Johnny Cash")

hurt = Song.new("Hurt", johnny_cash)
ring_of_fire = Song.new("Ring of Fire", johnny_cash)

blue_spade_shoes = Song.new("Blue Spade Shoes", elvis)
great_balls_of_fire = Song.new("Great Balls of Fire", elvis)
hound_dog = Song.new("I Ain't Nothing but a Hound Dog", elvis)

# we don't need to manually add songs any more  because
# the Artists will determine what songs are theirs by
# looking through all the Songs and selecting their own
# johnny_cash.add_song(hurt)
# johnny_cash.add_song(ring_of_fire)
#
# elvis.add_song(blue_spade_shoes)
# elvis.add_song(great_balls_of_fire)
# elvis.add_song(hound_dog)

puts "You're listening to K E X P 90.3 Seattle"
puts "Here's artists we're playing:"
Artist.all.each do |artist|
  puts "  #{artist.name}"
end
puts

puts "Here's who we're playing the most:"
artist = Artist.most_songs
puts "  #{artist.name} with #{artist.songs.length} songs"

binding.pry