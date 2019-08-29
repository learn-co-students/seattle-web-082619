class Song
  attr_accessor :title, :artist
  @@all = []

  # title: a String for the title of the song
  # artist: an instance of the Artist class
  def initialize(title, artist)
    @title = title
    @artist = artist

    @@all << self
  end

  def self.all
    @@all
  end
end