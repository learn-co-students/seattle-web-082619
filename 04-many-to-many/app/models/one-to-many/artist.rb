class Artist
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def self.all
    @@all
  end

  # return an array of Song instances where
  # each Song relates back to this Artist
  def songs
    Song.all.select do |song|
      song.artist == self
    end
  end

  # returns an Artist instance of the
  # Artist associated with the most Songs
  #
  # "def self.some_method" and
  # "def Artist.some_method" are synonomous
  #
  # def Artist.most_songs
  def self.most_songs
    most = 0
    most_artist = nil

    @@all.each do |artist|
      if artist.songs.length > most
        most = artist.songs.length
        most_artist = artist
      end
    end

    most_artist
  end
end