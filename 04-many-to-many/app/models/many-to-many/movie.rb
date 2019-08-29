def Movie
  attr_reader :title, :year
  @@all = []

  def initialize(title, year)
    @title = title
    @year = year

    @@all << self
  end

  def self.all
    @@all
  end

  # returns an array of Role instances related to this
  # movie.
  def roles
    Role.all.select do |role|
      role.movie == self
    end
  end

  # this rakes all the Roles for this Movie and plucks
  # off the Actor in that role
  def actors
    self.roles.map do |role|
      role.actor
    end
  end

  def sequel(year)
    movie_sequel = Movie.new(@title + " 2", year)
    self.roles.each do |role|
      Role.new(movie_sequel, role.actor, role.character)
    end
  end
end
