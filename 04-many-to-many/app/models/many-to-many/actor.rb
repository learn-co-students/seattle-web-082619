def Actor
  attr_reader :first_name, :last_name
  @@all = []

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name

    @@all << self
  end

  def self.all
    @@all
  end

  # look through all Role instances and returns
  # each Role an actor has been in
  def movies
    Role.all.select do |role|
      role.actor == self
    end
  end
end